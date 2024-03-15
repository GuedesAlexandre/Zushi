import { Component, OnInit } from '@angular/core';
import { CommandePostService } from 'src/app/Services/commande-post.service';
import { BoxesService } from 'src/app/Services/boxes.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  commandeArray: any[] = [];

  constructor( private boxesService: BoxesService,private commandePostService: CommandePostService ) { }


ngOnInit(): void {
  const commandeJson = localStorage.getItem('commande');
  if (commandeJson) {
    let commandeData = JSON.parse(commandeJson);
    if (!Array.isArray(commandeData)) {
      commandeData = [commandeData];
    }
    this.commandeArray = commandeData;
    this.boxesService.fetchData().subscribe((response: any) => {
      const boxs = response['hydra:member'];
      if (Array.isArray(boxs)) {
        this.commandeArray = this.replaceBoxIdsWithNames(boxs, this.commandeArray);
        console.log('commandeArray après remplacement:', this.commandeArray);
      } else {
        console.error('La réponse du serveur n\'est pas un tableau valide.');
      }
    });
  } else {
    console.error('Le local storage de commande est vide.');
  }
}
replaceBoxIdsWithNames(serviceOutput: any[], commandeArray: any[]): any[] {
  // Créer une map avec les ids, les noms et les prix des boxs
  const boxIdNameMap = serviceOutput.reduce((map: any, box: any) => {
    map[box['@id'].toLowerCase()] = { nom: box.nom, prix: box.prix };
    return map;
  }, {});

  console.log('boxIdNameMap:', boxIdNameMap);

  // Ajouter un / avant api et ajouter le prix correspondant à chaque nom de box dans chaque idBox de commandeArray
  return commandeArray.map((commande: any) => {
    if (Array.isArray(commande.idBoxs)) {
      commande.idBoxs = commande.idBoxs.map((idBox: string) => {
        const idWithPrefix = '/' + idBox;
        const boxInfo = boxIdNameMap[idWithPrefix.toLowerCase()];
        if (boxInfo) {
          return { nom: boxInfo.nom, prix: boxInfo.prix };
        } else {
          return { nom: idWithPrefix, prix: 0 };
        }
      });
      console.log('commande.idBoxs après ajout du / et du prix:', commande.idBoxs);
    }
    return commande;
  });
}

  PasseCommande(): any {
    const jsonBody = localStorage.getItem('commande');
  
    if (jsonBody != null) {
      const parsedBody = JSON.parse(jsonBody); // Convertir la chaîne en objet JSON
      this.commandePostService.postData(parsedBody).subscribe(response => { // Envoyer l'objet JSON
        console.log(response);
        alert("commande passé");
        localStorage.removeItem('commande');
      }, error => {
        console.error(error);
      });
    }
  }
  }






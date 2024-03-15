import { Component } from '@angular/core';
import { BoxesService } from 'src/app/Services/boxes.service';
import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommandePostService } from 'src/app/Services/commande-post.service';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {
  boxes: any = [];

  constructor(private boxesService: BoxesService, private commandePostService: CommandePostService ) { }

  ngOnInit(): void {
    this.boxesService.fetchData().subscribe((data: any) => {
      this.boxes = data['hydra:member'];
    });
  }

  selectedBoxes: { id: number, price: number }[] = [];

  orders: { boxId: number, prixTotal?: number }[] = [];
  totalPrice: number = 0;

  boxQuantities: { [boxId: number]: number } = {};

  incrementAndDisplay(boxId: number): void {
    const box = this.boxes.find((b: any) => b.id === boxId);
    if (box) {
      this.boxQuantities[boxId] = (this.boxQuantities[boxId] || 0) + 1;
      const div = document.getElementById('boxName');
      if (div) {
        div.innerHTML = '<div></div>';
        for (const [id, quantity] of Object.entries(this.boxQuantities)) {
          const selectedBox = this.boxes.find((b: any) => b.id === parseInt(id));
          if (selectedBox) {
            div.innerHTML += `<p>${quantity}x ${selectedBox.nom} ${selectedBox.prix * quantity}€</p>`;
          }
        }
      }

      this.orders.push({ boxId: box.id});
      console.table(this.orders);
   
      // Mettre à jour le prix total
      if(this.orders.length <11){
      this.totalPrice = this.orders.reduce((total) => total + box.prix, 0);
      console.log('Prix total:', this.totalPrice);
      const PrixTotal = document.getElementById('prixTotal');

      if (PrixTotal) {
        PrixTotal.innerHTML = "<p>Prix total : "  +this.totalPrice + "€</p>";
      }
    }else{
      alert("Vous ne pouvez pas commander plus de 10 boites pour une même commande");
    }
    }
  }

  decrementAndDisplay(boxId: number): void {
    const box = this.boxes.find((b: any) => b.id === boxId);
    if (box) {
      if (this.boxQuantities[boxId] && this.boxQuantities[boxId] > 0) {
        this.boxQuantities[boxId] -= 1;
        const div = document.getElementById('boxName');
        if (div) {
          div.innerHTML = '';
          for (const [id, quantity] of Object.entries(this.boxQuantities)) {
            const selectedBox = this.boxes.find((b: any) => b.id === parseInt(id));
            if (selectedBox && quantity > 0) {
              div.innerHTML += `<p>${quantity}x ${selectedBox.nom} ${selectedBox.prix * quantity}€</p>`;
             
            }
          }
        }

        const orderIndex = this.orders.findIndex((order) => order.boxId === box.id);
        if (orderIndex !== -1) {
          this.orders.splice(orderIndex, 1);
        }
        console.table(this.orders);

        // Réduire le prix

        // Mettre à jour le prix total
        this.totalPrice = this.orders.reduce((total, order) => total + box.prix, 0);
        const PrixTotal = document.getElementById('prixTotal');
        if (PrixTotal) {
          PrixTotal.innerHTML = "<p>Prix total : "  + this.totalPrice.toFixed(2) + "€</p>";
        }
      }

      if (this.orders.length === 0) {
        // Supprimer le tableau orders
        this.orders = [];
      }
    }
  }

concatenateOrders(orders: { boxId: number, prixTotal?: number }[]): any {
  if(this.orders.length === 0) {
  
    alert("Impossible de passé la commande : vous n'avez pas d'article dans votre commande.")
  }else{
  const currentDate = new Date().toISOString();
  const prixTotal = this.totalPrice;
  const idBoxs = orders.map(order => `api/boxs/${order.boxId}`);
  const idBoissons: string[] = []; // Replace "string" with the actual values

  const jsonBody = {
    date: currentDate,
    prixTotal: prixTotal,
    idBoxs: idBoxs,
    idBoissons: idBoissons
  };
  this.commandePostService.postData(jsonBody).subscribe(response => {
    console.log(response);
  }, error => {
    console.error(error);
  });
 alert("La commande a bien été passé !");
 

  localStorage.setItem('commande', JSON.stringify(jsonBody));
 
  return JSON.stringify(jsonBody);




}
 
  
}

cancelOrders(): void {
  if (this.orders && this.orders.length > 0) {
    this.orders = [];
    location.reload();
  }else{
    alert("Impossible d'annuler la commande : vous n'avez pas d'article dans votre commande.");
  }
}


}
    
  




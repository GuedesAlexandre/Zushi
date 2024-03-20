import { Component } from '@angular/core';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent {

Commandes !: any;
  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem('commande') === null){
      console.error('Pas de commande');
      this.Commandes = false;
      localStorage.clear();
      setTimeout(() => {
        window.location.href = '/board';
      }, 1000);
  }
  else{
    this.Commandes =true;
    setTimeout(() => {
      
      localStorage.clear();
      window.location.href = '/board';
    }, 2000);
   
  }
}
}
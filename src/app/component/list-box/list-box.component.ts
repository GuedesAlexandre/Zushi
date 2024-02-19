import { Component } from '@angular/core';
import { BoxesService } from 'src/app/Services/boxes.service';
import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {
  boxes: any = [];

  constructor(private boxesService: BoxesService) { }

  ngOnInit(): void {
    this.boxesService.fetchData().subscribe((data: any) => {
      this.boxes = data['hydra:member'];
    });
  }

  selectedBoxes: { id: number, price: number }[] = [];

  orders: { boxId: number, price: number }[] = [];
  totalPrice: number = 0;

  boxQuantities: { [boxId: number]: number } = {};

  incrementAndDisplay(boxId: number): void {
    const box = this.boxes.find((b: any) => b.id === boxId);
    if (box) {
      this.boxQuantities[boxId] = (this.boxQuantities[boxId] || 0) + 1;
      const div = document.getElementById('boxName');
      if (div) {
        div.innerHTML = '<h1>Cart</h1>';
        for (const [id, quantity] of Object.entries(this.boxQuantities)) {
          const selectedBox = this.boxes.find((b: any) => b.id === parseInt(id));
          if (selectedBox) {
            div.innerHTML += `${quantity}x ${selectedBox.nom} ${selectedBox.prix * quantity}€<br>`;
          }
        }
      }

      this.orders.push({ boxId: box.id, price: box.prix });
      console.table(this.orders);

      // Mettre à jour le prix total
      this.totalPrice = this.orders.reduce((total, order) => total + order.price, 0);
      console.log('Prix total:', this.totalPrice);
      const PrixTotal = document.getElementById('prixTotal');
      if (PrixTotal) {
        PrixTotal.innerHTML = "Le prix total est:"  +this.totalPrice + "€";
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
              div.innerHTML += `${quantity}x ${selectedBox.nom} ${selectedBox.prix * quantity}€<br>`;
             
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
        this.totalPrice = this.orders.reduce((total, order) => total + order.price, 0);
        const PrixTotal = document.getElementById('prixTotal');
        if (PrixTotal) {
          PrixTotal.innerHTML = "Le prix total est:"  + this.totalPrice.toFixed(2) + "€";
        }
      }

      if (this.orders.length === 0) {
        // Supprimer le tableau orders
        this.orders = [];
      }
    }
  }
    }
  


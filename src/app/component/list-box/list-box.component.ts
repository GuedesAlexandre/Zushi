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
  boxes: any;

  constructor(private boxesService: BoxesService) { }

  ngOnInit(): void {
    this.boxesService.fetchData().subscribe((data: any) => {
      this.boxes = data;
    });
  }

}

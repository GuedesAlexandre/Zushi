import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { ListBoxComponent } from './component/list-box/list-box.component';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './component/error/error.component';

import { AboutComponent } from './component/about/about.component';
import { FoodComponent } from './component/food/food.component';


const routes: Routes = [
{path: '' , component: LandingComponent},
{path: 'board' , component: ListBoxComponent },
{path: 'about' , component: AboutComponent },
{path: 'food' , component: FoodComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

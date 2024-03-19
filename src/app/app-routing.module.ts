import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { ListBoxComponent } from './component/list-box/list-box.component';

import { AboutComponent } from './component/about/about.component';
import { RecapComponent } from './component/recap/recap.component';


import { FoodComponent } from './component/food/food.component';
import { ErrorComponent } from './component/error/error.component';
import { ValidComponent } from './component/valid/valid.component';
import { ContactComponent } from './component/contact/contact.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { ConfidentialiteComponent } from './component/confidentialite/confidentialite.component';


const routes: Routes = [
{path: '' , component: LandingComponent},
{path: 'board' , component: ListBoxComponent },
{path: 'about' , component: AboutComponent },
{path: 'food' , component: FoodComponent},
{path: 'recap' , component: RecapComponent},
{path: 'valid', component: ValidComponent},
{path: 'contact', component: ContactComponent},
{path: 'rgpd', component: RgpdComponent},
{path: 'confidentialite', component: ConfidentialiteComponent},
{path: '**' , component: ErrorComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

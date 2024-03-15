import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { ListBoxComponent } from './component/list-box/list-box.component';
import { AboutComponent } from './component/about/about.component';
import { RecapComponent } from './component/recap/recap.component';

const routes: Routes = [
{path: '' , component: LandingComponent},
{path: 'board' , component: ListBoxComponent },
{path: 'about' , component: AboutComponent },
{path: 'recap' , component: RecapComponent },

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

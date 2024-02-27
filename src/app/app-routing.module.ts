import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { ListBoxComponent } from './component/list-box/list-box.component';
import { LandingComponent } from './component/landing/landing.component';
import { ListBoxComponent } from './component/list-box/list-box.component';

const routes: Routes = [
{path: '' , component: LandingComponent},
{path: 'Board' , component: ListBoxComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

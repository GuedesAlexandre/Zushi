import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { ListBoxComponent } from './component/list-box/list-box.component';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './component/error/error.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Board', component: ListBoxComponent },
  {path: '**', component: ErrorComponent}
]
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

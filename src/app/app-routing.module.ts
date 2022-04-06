import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingComponent} from './components/landing/landing.component';
import {SelectTicketNumberComponent} from './components/select-ticket-number/select-ticket-number.component'

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'select-ticket-number',component:SelectTicketNumberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

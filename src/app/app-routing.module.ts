import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingComponent} from './components/landing/landing.component';
import {SelectTicketNumberComponent} from './components/select-ticket-number/select-ticket-number.component'
import {SelectSeatsComponent} from './components/select-seats/select-seats.component'

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path: 'hall/:hallname', component:SelectTicketNumberComponent, pathMatch: 'full'},
  {path: 'noOfTickets/:number', component:SelectSeatsComponent, pathMatch: 'full'},
  {path:'select-ticket-number',component:SelectTicketNumberComponent },
  {path:'select-seats',component:SelectSeatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

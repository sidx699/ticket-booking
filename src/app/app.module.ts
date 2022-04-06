import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTicketNumberComponent } from './components/select-ticket-number/select-ticket-number.component';
import { LandingComponent } from './components/landing/landing.component';
import { SelectSeatsComponent } from './components/select-seats/select-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectTicketNumberComponent,
    LandingComponent,
    SelectSeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

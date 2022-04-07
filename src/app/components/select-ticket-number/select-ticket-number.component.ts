import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-select-ticket-number',
  templateUrl: './select-ticket-number.component.html',
  styleUrls: ['./select-ticket-number.component.css']
})
export class SelectTicketNumberComponent implements OnInit {

  noSeats: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  scores: { [name: number]: boolean } = {1: true,2: true,3: false,4: false,5: false,6: false,7: false,8: false,9: false,10: false,11: false,12: false,13: false,14: false,15: false,16: false};

  // Initialization
  
constructor(){

  //(<HTMLInputElement> document.getElementById("1")).disabled = true;
  let currentSeat;
  for(var i=1; i<=16; i++)
  {
    //currentSeat = (<HTMLInputElement>document.getElementById(String(i)));

    if(this.scores[i])
    {
      //alert(this.scores[i]+""+i);
      var element = <HTMLInputElement> document.getElementById(String(i));
      // element.disabled = true;
      //(document.getElementById(String(i)) as HTMLInputElement).disabled = true;
    }
  }

}

  submitTicket() {

    //console.log(this.scores);

    



  }

  ngOnInit(): void {
  }

}

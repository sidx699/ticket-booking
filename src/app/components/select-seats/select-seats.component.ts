import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'; 


@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.css']
})
export class SelectSeatsComponent implements OnInit {

    url = 'http://localhost:5000/enroll';
    public href: string = "";
    maxSeats: number = 0;
    initSeat: number = 0;
    
    constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url;
    this.maxSeats = Number(this.href.split("noOfTickets/")[1]);
    //console.log(this.maxSeats);
  }

  dict: {[name: string]: boolean} = {a1: true, a2: false, a3:false,a4: false, a5: false, a6:false,a7: false, a8: false, a9:false,a10: true, a11: false, a12:false, a13:false,a14: false, a15: false, a16:false,b1: false, b2: false, b3:false,b4: false, b5: false, b6:false,b7: false, b8: false, b9:false,b10: false, b11: false, b12:false, b13:false,b14: false, b15: false, b16:false,c1: false, c2: false, c3:false,c4: false, c5: false, c6:false,c7: false, c8: false, c9:false,c10: false, c11: false, c12:false, c13:false,c14: false, c15: false, c16:true}; 
  elementSelected: string[] = []; 
  

  countSeat()
  {
    if(this.initSeat == this.maxSeats-1){
        this.elementSelectedFunction();
        if(confirm(this.maxSeats+" tickets has been selected already!\nProceed to Pay Rs "+ this.maxSeats*200)) {
            console.log("Send elementSelected");
            console.log(this.elementSelected);
        }
        else{
            //alert("Cancelled");

            this.elementSelected.forEach(function (value) {
                
                var currentSeat = <HTMLInputElement> document.getElementById(value);
                if(currentSeat.checked)
                {
                    currentSeat.checked = false;
                }

              }); 

            this.initSeat = 0;
            this.elementSelected = [];
            // console.log(this.initSeat);
            // console.log(this.elementSelected);
        }
    }
    else{
        this.initSeat += 1;
    }
  }


  elementSelectedFunction()
    {
        for(let i=1; i<=16; i++)
        {
            var currentSeat = <HTMLInputElement> document.getElementById("a"+String(i));
            if(currentSeat.checked)
            {
                //this.dict[i] = true;
                this.elementSelected.push("a"+i);
            }
        }
        for(let i=1; i<=16; i++)
        {
            var currentSeat = <HTMLInputElement> document.getElementById("b"+String(i));
            if(currentSeat.checked)
            {
                //this.dict[i] = true;
                this.elementSelected.push("b"+i);
            }
        }
        for(let i=1; i<=16; i++)
        {
            var currentSeat = <HTMLInputElement> document.getElementById("c"+String(i));
            if(currentSeat.checked)
            {
                //this.dict[i] = true;
                this.elementSelected.push("c"+i);
            }
        }
       
        
        
    }

}



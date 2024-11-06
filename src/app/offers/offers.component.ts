import { Component , OnInit } from '@angular/core';
import { off } from 'process';
import { OffersService } from '../service/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements  OnInit {

  ourOffers !:Array<any>;
  ourDailyOffers !:Array<any>;
  ourMonthlyOffers !:Array<any>;

  statusSelected!:string;
  constructor( private offers :OffersService ) 
  {
   this.ourOffers=offers.offers;
   this.ourDailyOffers=offers.offers2;
   this.ourMonthlyOffers=offers.offers3

  }
ngOnInit(): void {
  console.log(this.ourDailyOffers);
  console.log();
  
  
}
// onClick(status:any)
// {
// this.statusSelected=status
// }
activeButton: string = ''; // This will track which button is active

onClick(button: string): void {
  this.activeButton = button; // Update activeButton with the clicked button
  console.log('Button clicked:', button); // Optional: for debugging
}

}

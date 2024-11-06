import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  serviceslist !:Array<any>;
  constructor( private services : ServicesService)
  {
    this.serviceslist=services.servicesList
  }
  ngOnInit(): void
  {
    console.log(this.serviceslist);
    
  }

}

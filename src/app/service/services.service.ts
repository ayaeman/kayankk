import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  servicesList :Array <any> =[
    {
      cardImage:'https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg?t=st=1730572373~exp=1730575973~hmac=f4b84a4e6c3f2bfed42d6688a69137fc6e751d6f3c423ee32f341ffa77bce004&w=740',
      cardTitle :'Virtual Rental Contract'
    },
    {
      cardImage:'../../assets/images/WhatsApp Image 2024-09-10 at 23.45.56_5018358b.jpg',
      cardTitle :'Shared Area'
    },
    {
      cardImage:'../../assets/images/2024_09_07_05_22_IMG_3588.JPG',
      cardTitle :'Private Room'
    },
    {
      cardImage:'../../assets/images/2024_09_07_05_19_IMG_3583.JPG',
      cardTitle :'Meeting Room'
    },
    {
      cardImage:'../../assets/images/IMG_3639.jpg',
      cardTitle :'Training Room'
    },
    {
      cardImage:'../../assets/images/IMG_8947.jpg',
      cardTitle :'Events Room'
    }
  ]
}

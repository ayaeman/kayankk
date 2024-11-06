import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'gallary' , component:GallaryComponent},
  {path:'offers' , component:OffersComponent},
  {path:'about-us' , component:AboutUsComponent},
  {path: 'contact-us' , component : ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

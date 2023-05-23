import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page6Component } from './pages/page6/page6.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"page1",component:Page1Component},
  {path:"page2",component:Page2Component},
  {path:"page3",component:Page3Component},
  {path:"page4",component:Page4Component},
  {path:"page5",component:Page5Component},
  {path:"page6",component:Page6Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

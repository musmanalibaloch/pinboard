import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalServiceComponent } from './modal-service/modal-service.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PinsComponent } from './pins/pins.component';
import { RouterModule, Routes } from '@angular/router';
import { PinDetailComponent } from './pin-detail/pin-detail.component';

const routes:Routes = 
[
  {path:'',component:PinsComponent},
  {path:'pins',component:PinsComponent},
  {path:'pin/:id',component:PinDetailComponent},
  { path: '**', component: PinsComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalServiceComponent,
    PinDetailComponent,
    PinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

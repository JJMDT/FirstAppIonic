import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorService } from '../app/proveedor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  //se importa PRoveedorService
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ProveedorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

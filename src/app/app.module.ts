import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NavBarComponent } from './templates/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { GestionSolicitudesClientesComponent } from './components/gestion-solicitudes-clientes/gestion-solicitudes-clientes.component';


const routes: Routes= [
  {path:'',component:HomeComponent, pathMatch: 'full'},
  {path:'gestion_solicitud',component:GestionSolicitudesClientesComponent, pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    GestionSolicitudesClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
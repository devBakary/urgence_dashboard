import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { EntiteComponent } from './entite/entite.component';
import { AjouterEntiteComponent } from './ajouter-entite/ajouter-entite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterResponsableComponent } from './ajouter-responsable/ajouter-responsable.component';
import { AjouterGesteComponent } from './ajouter-geste/ajouter-geste.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    EntiteComponent,
    AjouterEntiteComponent,
    AjouterResponsableComponent,
    AjouterGesteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

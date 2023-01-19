import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterEntiteComponent } from './ajouter-entite/ajouter-entite.component';
import { AjouterGesteComponent } from './ajouter-geste/ajouter-geste.component';
import { AjouterResponsableComponent } from './ajouter-responsable/ajouter-responsable.component';
import { EntiteComponent } from './entite/entite.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"/accueil",
    pathMatch: 'full'
},

  {
    path: "accueil",
    component: AccueilComponent,
  },
  {
    path: "entite",
    component: EntiteComponent,
  },
  {
    path: "ajouter_entite",
    component: AjouterEntiteComponent,
  },
  {
    path: "ajouter_responsable",
    component: AjouterResponsableComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "ajouter_geste",
    component: AjouterGesteComponent,
  },
  {
    path: "profile",
    component: ProfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

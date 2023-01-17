import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterEntiteComponent } from './ajouter-entite/ajouter-entite.component';
import { EntiteComponent } from './entite/entite.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

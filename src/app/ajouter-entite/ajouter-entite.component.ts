import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Entite } from '../models/entite';
import { EntiteService } from '../services/entite.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-ajouter-entite',
  templateUrl: './ajouter-entite.component.html',
  styleUrls: ['./ajouter-entite.component.scss']
})
export class AjouterEntiteComponent implements OnInit {
  uliste: any;
  img: any;
  id: any

  constructor(private eservice: EntiteService, private uservice: UtilisateurService) { }

   //pour la population
   adEntite: Entite={
    nom: '',
    numero: '',
    img: ''
}

formodule! : FormGroup
nom: string = '';
numero: string ='';

  ngOnInit(): void {

    //la liste des users
    this.uservice.getUser().subscribe(data =>{
      this.uliste = data;
    })
  }


  filechange(event: any){
    this.img = event.target.files[0]
    console.log('rrrrrrrrr', event);
  }

  //ajouter une nouvelle ent
  onSubmit(){

    this.eservice.addEntite(this.nom, this.numero, this.img, this.id).subscribe(data =>{
      this.adEntite = data;
      console.log(")))))))))))àààààààààààààààààà",data);

    })
  }

}

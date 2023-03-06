import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Entite } from '../models/entite';
import { EntiteService } from '../services/entite.service';
import { UtilisateurService } from '../services/utilisateur.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-entite',
  templateUrl: './ajouter-entite.component.html',
  styleUrls: ['./ajouter-entite.component.scss']
})
export class AjouterEntiteComponent implements OnInit {
  uliste: any;
  img: any;
  id: any;
  audio: any;

  constructor(private eservice: EntiteService, private uservice: UtilisateurService) { }

   //pour la population
   adEntite: Entite={
    nom: '',
    numero: '',
    img: '',
    audio: ''
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
  filechange1(event: any){
    this.audio = event.target.files[0]
    console.log('rrrrrrrrr', event);
  }

  //ajouter une nouvelle ent
  ajoutEntite(){
    if(this.nom == '' || this.numero == ''|| this.img == ''|| this.id == '' || this.audio == ''){
      swal.fire({
        icon: 'warning',
        title: 'Veuillez renseigner tous les champs !',
      })
    }else if(this.nom.length != 8){
      swal.fire({
        icon: 'warning',
        title: 'Le numero doit contenir huit chiffres !',
      })
    }

    else{
      this.eservice.addEntite(this.nom, this.numero, this.img, this.audio, this.id).subscribe({
        next : data =>{
          this.adEntite = data;
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Entité ajouter avec succes !',
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            location.reload();
           });


        },
        error: e => {
          if(e.status == 200) {
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Entité ajouter avec succes !',
              showConfirmButton: false,
              timer: 1500
            }).then((result) => {
              location.reload();
             });
          }
          else{
            swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Il y a eu un probleme!'
            })

          }
        }
      });

    }

  }

}

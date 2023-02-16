import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Geste } from '../models/geste';
import { GesteService } from '../services/geste.service';
import { TokenService } from '../_services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-geste',
  templateUrl: './ajouter-geste.component.html',
  styleUrls: ['./ajouter-geste.component.scss']
})
export class AjouterGesteComponent implements OnInit {

  currentUser: any;
  iduser: any;
  img1: any;

  constructor(private tokenService: TokenService, private gservice: GesteService) { }

  ngOnInit(): void {

    //recuperation de l'user encours
    this.currentUser = this.tokenService.getUser();
    //console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", this.currentUser.id);
    this.iduser= this.currentUser.id
  }

  ajoutGeste: Geste ={
    nom: '',
    description: '',
    img1: '',
    lien: ''
  }

  formodule! : FormGroup
    nom: string =  '';
    description: string = '';
    lien: string = '';

    filechange(event: any){
      this.img1 = event.target.files[0]
      console.log('rrrrrrrrr', event);
    }


  onSubmit(){
    this.gservice.addGeste(this.nom, this.description, this.img1, this.lien, this.iduser).subscribe(
      data =>{
        this.ajoutGeste = data;
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ajouter avec succes !',
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          location.reload();
         })
      }
    )
  }


}

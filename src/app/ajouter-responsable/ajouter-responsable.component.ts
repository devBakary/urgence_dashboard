import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-ajouter-responsable',
  templateUrl: './ajouter-responsable.component.html',
  styleUrls: ['./ajouter-responsable.component.scss']
})
export class AjouterResponsableComponent implements OnInit {

  id: any
  rliste : any

  form: any = {
    username: null,
    email: null,
    numero: null,
    adresse: null,
    password: null,
    roles: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private uservice: UtilisateurService) { }

  ngOnInit(): void {

    //recuperation de la liste de role
    this.uservice.getRole().subscribe(data =>{
      this.rliste = data;
      console.log(data);
      console.log(data[0].name);

    })
  }

  onSubmit(): void {
    const { username, email, adresse, numero, password  } = this.form;

    this.uservice.addRespon(username, email, numero, adresse, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  // Responsable: User={
  //   username: '',
  //   email: '',
  //   adresse: '',
  //   numero: '',
  //   password: '',
  // }

  // username: string = '';
  // email: string = '';
  // adresse: string = '';
  // numero: string = '';
  // password: string = '';

  // ajoutRespond(){
  //   this.Responsable.username = this.username
  //   this.Responsable.email = this.email
  //   this.Responsable.adresse = this.adresse
  //   this.Responsable.numero = this.numero
  //   this.Responsable.password = this.password
  //   this.uservice.addRespon(this.Responsable).subscribe(data =>{
  //       this.reloadPage();
  //       console.log("bien ajouter", data);

  //   })
  // }


  // reloadPage(): void {
  //   window.location.reload();
  // }
}

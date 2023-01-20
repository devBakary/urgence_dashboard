import { Component, OnInit } from '@angular/core';
import { Notifications } from '../models/notification';
import { User } from '../models/user';
import { EntiteService } from '../services/entite.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { TokenService } from '../_services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private roles: string[] = [];
  isLogged = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  username?: string;
  currentUser: any;
  eliste: any
  title = 'urgence_dashboard';
  lue = false
  luelist: any
  iduser: any
  msg: any
  uliste: any
  ms: any;
  vrai: boolean = false;





  constructor(
    private authService: UtilisateurService,
    private tokenService: TokenService,
    private eservice: EntiteService,
    private uservice: UtilisateurService
  ){}

  ngOnInit(): void{

    this.isLogged = this.tokenService.isLogged();

    if (this.isLogged) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showSuperAdminBoard = this.roles.includes('ROLE_SUPER')
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
      this.uliste = user
      this.iduser = user.id;
      //pour recuperer la valeur des attributs
      this.usernames = user.username
      this.email = user.email
      this.adresse = user.adresse
      this.numero = user.numero
    }

    this.currentUser = this.tokenService.getUser();



    //la liste des notification
    this.eservice.getNotif().subscribe(data =>{
      this.eliste = data;

      for (let item of data) {
        console.log(item.etat);
        if(item.etat == 0){
          this.lue = true

        }
      }
    })

    //liste notif non lue
    this.eservice.getNotiflue().subscribe( data =>{
      this.luelist = data;
    })


  }
  //modification de l'etat
  uNotif: Notifications={
    etat: 0
  }
  onSubmit(id : number){
    this.eservice.updateNotif(id).subscribe(data =>{
      this.uNotif = data;
      location.reload();
    })
  }

  //modification de l'user

  upUser: User ={
    username: '',
    email: '',
    numero: '',
    adresse: '',
    password: '',
  }

    usernames: string = '';
    email: string = '';
    numero: string = '';
    adresse: string = '';
    password: string = '';

  userModif(){
    if(this.adresse == '' || this.usernames == '' || this.email == '' || this.email == ''){
        swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Tous les champs doivent être remplis !',
        })
        // this.msg = ("Veuillez remplir tous les champs!")
      }
      else
    if(this.password == '' ){
      swal.fire({
        icon: 'warning',
        title: 'Veuillez renseigner le mot de passe pour continuer ...',

      })
      }
      else{
        this.uservice.updateUser(this.usernames, this.email, this.numero,
          this.adresse, this.password, this.iduser).subscribe(data =>{

            this.upUser = data;
              swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Modifier avec succes !',
              showConfirmButton: false,
              timer: 1500
            }).then((result) => {
              location.reload();
             })

        })


      }

  }
  

  deconect(): void{
    this.tokenService.logout()
  }


}

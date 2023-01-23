import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { TokenService } from '../_services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  uliste : any;
  private roles: string[] = [];
  isLogged = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  username?: string;
  currentUser: any;
  constructor( private uservice: UtilisateurService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();

    if (this.isLogged) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showSuperAdminBoard = this.roles.includes('ROLE_SUPER')
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }

    this.currentUser = this.tokenService.getUser();


    //liste des users
    this.uservice.getUser().subscribe(data =>{
      this.uliste = data;
      // console.log(data)
    })
  }

   //supprimer une user
   supprimer(id: number){
    swal.fire({
      title: 'Vous êtes sur de vouloir supprimé ?',
      text: "Cette action est irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuer'
    }).then((result) => {
      this.uservice.suppUser(id).subscribe(data =>{
        location.reload();
      })
      if (result.isConfirmed) {
        swal.fire(
          'Supprimer !',
          'L\'utilisateur a été supprimer.',
          'success',
        )
      }
    })

  }

}

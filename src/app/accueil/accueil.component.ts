import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { TokenService } from '../_services/token.service';

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

}

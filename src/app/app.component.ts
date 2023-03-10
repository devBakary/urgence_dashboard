import { Component } from '@angular/core';
import { UtilisateurService } from './services/utilisateur.service';
import { TokenService } from './_services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private roles: string[] = [];
  isLogged = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  username?: string;
  currentUser: any;
  title = 'urgence_dashboard';

  constructor(
    private authService: UtilisateurService,
    private tokenService: TokenService,
  ){}

  ngOnInit(): void{

    this.isLogged = this.tokenService.isLogged();

    if (this.isLogged) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showSuperAdminBoard = this.roles.includes('ROLE_SUPER')
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }

    this.currentUser = this.tokenService.getUser();
  }

  deconect(): void{
    this.tokenService.logout()
  }
 }


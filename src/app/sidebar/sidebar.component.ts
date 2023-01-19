import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { TokenService } from '../_services/token.service';

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
  title = 'urgence_dashboard';

  show = false

  constructor(
    private authService: UtilisateurService,
    private tokenService: TokenService,
  ){}

  ngOnInit(): void{

    this.show = false
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

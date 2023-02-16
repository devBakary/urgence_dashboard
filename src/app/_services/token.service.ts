import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';

  const token = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor(private router: Router, private us: UtilisateurService) { }


    saveToken(token: any): void{
    window.localStorage.setItem('token', JSON.stringify(token))
    this.router.navigate(['sidebar/accueil'])
  }



  //methode pour recuperer le token dans le localstorage
  isLogged(): boolean{
    const token = window.localStorage.getItem('token')
    //console.log("je sui cccccccccccc" + token)
    return !! token
  }
  public getUser(): any {
    const user = window.localStorage.getItem('token');
    if (user) {
      // console.log("iiiiiiiiiiiiiiiiiii", user);
      return JSON.parse(user);
    }

    return {};
  }
























  //methode pour supprimer le token
  logout(): void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }

}

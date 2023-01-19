import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const AUTH_API = 'http://localhost:8080/urgence/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  log = 'http://localhost:8080/api/auth/connexion';
  
  constructor(private http : HttpClient) { }

  login(credentials: ICredentials): Observable<IToken>{
    return this.http.post<IToken>(this.log, credentials)
  }

  //methode pour recuperer la liste des utilisateurs
  getUser():Observable<any>{
    return this.http.get(`http://localhost:8080/urgence/auth/liste`)
  }

  //methode pour recuperer la liste de role
  getRole():Observable<any>{
    return this.http.get(`http://localhost:8080/urgence/auth/rliste`)
  }

  //ajout d'un responsable
  addRespon(username: string, email: string, numero: string, adresse: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'inscrire',
      {
        username,
        email,
        numero,
        adresse,
        password
      },
      httpOptions
    );
  }
}

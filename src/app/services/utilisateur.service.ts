import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  //methode pour recuperer la liste des utilisateurs
  getUser():Observable<any>{
    return this.http.get(`http://localhost:8080/urgence/auth/liste`)
  }
}

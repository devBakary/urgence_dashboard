import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntiteService {

  constructor(private http : HttpClient) { }

  //liste des entites
  getEntite():Observable<any>{
    return this.http.get(`http://localhost:8080/urgence/entite/liste`)
  }

  //pour ajouter une entité
  addEntite(nom: string, numero: string, img: any, id: number):Observable<any>{
    let data = new FormData();
    data.append('nom', nom);
    data.append('numero', numero);
    data.append('img', img);
    return this.http.post(`http://localhost:8080/urgence/entite/creer/${id}`,data)
  }
}

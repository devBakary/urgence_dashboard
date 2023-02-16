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

  //liste des Notifications
  getNotif():Observable<any>{
    return this.http.get(`http://localhost:8080/urgence/entite/listeNotif`)
  }

  //liste des Notifications avec le statut 1
  getNotiflue():Observable<any>{
    return this.http.get(`http://localhost:8080/urgence/entite/listeNotification`)
  }

  //liste des Notifications
  updateNotif(id: number):Observable<any>{
    return this.http.put(`http://localhost:8080/urgence/entite/update/${id}`, id)
  }

  //pour ajouter une entité
  addEntite(nom: string, numero: string, img: any,audio: any, id: number):Observable<any>{
    let data = new FormData();
    data.append('nom', nom);
    data.append('numero', numero);
    data.append('img', img);
    data.append('audio', audio)
    return this.http.post(`http://localhost:8080/urgence/entite/creer/${id}`,data)
  }

  //supprimer une entite
  suppEntite(id: number):Observable<any>{
    return this.http.delete(`http://localhost:8080/urgence/entite/delete/${id}`)
  }

  //liste des signale
  getSignale(): Observable<any>{
    return this.http.get(`http://localhost:8080/urgence/signale/liste`);
  }
}

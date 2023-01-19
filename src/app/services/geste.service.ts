import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GesteService {

  constructor(private http: HttpClient) { }

  //pour ajouter une entité
  addGeste(nom: string, description: string, img1: any, img2: any, id: number):Observable<any>{
    let data = new FormData();
    data.append('nom', nom);
    data.append('description', description);
    data.append('img1', img1);
    data.append('img2', img2);
    return this.http.post(`http://localhost:8080/urgence/geste/creer/${id}`,data)
  }
}

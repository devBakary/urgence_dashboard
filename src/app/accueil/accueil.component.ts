import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  uliste : any
  constructor( private uservice: UtilisateurService) { }

  ngOnInit(): void {
    this.uservice.getUser().subscribe(data =>{
      this.uliste = data;
      console.log(data)
    })
  }

}

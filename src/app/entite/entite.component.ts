import { Component, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.component.html',
  styleUrls: ['./entite.component.scss']
})
export class EntiteComponent implements OnInit {

  eliste : any
  uliste : any
  constructor(private eservice : EntiteService, private uservice: UtilisateurService) { }

  ngOnInit(): void {

    //la liste des entites
    this.eservice.getEntite().subscribe(data =>{
      this.eliste = data;
      console.log(data);

      console.log(data[0].user.username)
    })

    //la liste des users
    this.uservice.getUser().subscribe(data =>{
      this.uliste = data;
    })
  }

}

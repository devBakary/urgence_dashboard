import { Component, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite.service';
import { UtilisateurService } from '../services/utilisateur.service';
import swal from 'sweetalert2';

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

  //supprimer une entité
  supprimer(id: number){
    swal.fire({
      title: 'Vous êtes sur de vouloir supprimé ?',
      text: "Cette action est irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuer'
    }).then((result) => {
      this.eservice.suppEntite(id).subscribe(data =>{
        location.reload();
      })
      if (result.isConfirmed) {
        swal.fire(
          'Supprimer !',
          'L\'entité a été supprimer.',
          'success',
        )
      }
    })

  }

}

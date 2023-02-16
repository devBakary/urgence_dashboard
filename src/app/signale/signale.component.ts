import { Component, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite.service';

@Component({
  selector: 'app-signale',
  templateUrl: './signale.component.html',
  styleUrls: ['./signale.component.scss']
})
export class SignaleComponent implements OnInit {

  page: number = 1;
  sliste : any;

  constructor(private sentite : EntiteService) { }

  ngOnInit(): void {

    this.sentite.getSignale().subscribe(data =>{
      this.sliste = data;
      console.log(data);

    })
  }

}

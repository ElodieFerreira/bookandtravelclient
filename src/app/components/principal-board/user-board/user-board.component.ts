import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {
  propertyList = [
    {
      url: 'https://www.constructeur-maison-laure.fr/sites/default/files/2019-10/maison-toiture-plate-2-maison-laure%20-%20OPTI.jpg',
      libelle: 'La plus belle maison de l\'univers (c\'est pas vrai)',
      prix: '1000000€',
      ville: 'Bourg Palette',
      icones: 'no icones'
    },
    {
      url: 'https://image.tubefr.com/upload/b/05/b05a5bb892d8b69ed782a72014670d53.jpg',
      libelle: 'La cabane de melvin',
      prix: '500€',
      ville: 'Minecraft',
      icones: 'no icones'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

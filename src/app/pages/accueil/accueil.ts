import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  categories = [
    {
      titre: 'Top',
      images: [],
    },
    {
      titre: 'Moyen',
      images: [],
    },
    {
      titre: 'Nul',
      images: [],
    },
  ];
}

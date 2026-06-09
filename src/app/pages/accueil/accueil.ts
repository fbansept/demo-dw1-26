import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  nouvelleUrlImage =
    'https://s2.qwant.com/thumbr/474x266/f/b/ad4d78aa76c0c65be16fe233a6aeb2ba6d464a7be6e4234c2e586044830d59/OIP.4IXeglpzpeyzgxRKIH10LAHaEK.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.4IXeglpzpeyzgxRKIH10LAHaEK%3Fpid%3DApi&q=0&b=1&p=0&a=0';

  ngOnInit() {
    this.chargement();
  }

  chargement() {
    const jsonCategories = localStorage.getItem('categories');

    //on vérifie si il y a des données
    if (jsonCategories != null) {
      //si il y en a, on initialises categories avec le contenu du localstorage
      this.categories = JSON.parse(jsonCategories);
    } else {
      //si il n'y en a pas, on initialises categories avec des catégories par défaut
      this.categories = [
        { titre: 'Top', images: [] },
        { titre: 'Moyen', images: [] },
        { titre: 'Nul', images: [] },
      ];
      this.sauvegarde();
    }
  }

  sauvegarde() {
    const jsonCategories = JSON.stringify(this.categories);
    localStorage.setItem('categories', jsonCategories);
  }

  onAjoutImage() {
    if (this.nouvelleUrlImage != '') {
      this.categories[0].images.push(this.nouvelleUrlImage);
      this.nouvelleUrlImage = '';
      this.sauvegarde();
    }
  }

  onSuppressionImage(indexCategorie: number, indexImage: number) {
    console.log(indexCategorie, indexImage);

    //supprimer de this.categories à l'index "indexCategorie"
    //dans la propriété images, à l'index "indexImage"
    //note : pour supprimer l'element d'un tableau : monTableau.splice(indexElement,1)

    this.categories[indexCategorie].images.splice(indexImage, 1);
    this.sauvegarde();
  }

  onDeplacement(indexCategorie: number, indexImage: number, haut: boolean = true) {
    //on duplique l'image dans la categorie inférieur/supérieur (indexCategorie + 1 ou -1 selon le parametre "haut")
    const urlImage = this.categories[indexCategorie].images[indexImage];
    this.categories[indexCategorie + (haut ? -1 : 1)].images.push(urlImage);
    //on supprime l'image originale
    this.categories[indexCategorie].images.splice(indexImage, 1);
    this.sauvegarde();
  }

  categories = [
    {
      titre: 'Top',
      images: [
        'https://s2.qwant.com/thumbr/474x355/f/8/8bf3a97316628bd2b5e0409c72e1905fe5baec7ea652561ef14c5ad12e5b4f/OIP.WeGrv59uizzc0w9OSWcqoQHaFj.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.WeGrv59uizzc0w9OSWcqoQHaFj%3Fpid%3DApi&q=0&b=1&p=0&a=0',
        'https://s1.qwant.com/thumbr/474x711/8/0/a390c721e382269510f800e2f87a537c3c20a73d0354cbd4e3c6897e036e43/OIP.4I59nh6DR1HTHY-fIxZ7YwHaLH.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.4I59nh6DR1HTHY-fIxZ7YwHaLH%3Fpid%3DApi&q=0&b=1&p=0&a=0',
      ],
    },
    {
      titre: 'Moyen',
      images: [],
    },
    {
      titre: 'Nul',
      images: [
        'https://s2.qwant.com/thumbr/474x239/6/f/6ac3b6e9cd6ca4e710e04fe8de7f6ed6aa93fe43a761386448b521ff563e4b/OIP.rVo4T8-DDWRQG9ayCcutMgHaDv.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.rVo4T8-DDWRQG9ayCcutMgHaDv%3Fpid%3DApi&q=0&b=1&p=0&a=0',
      ],
    },
  ];
}

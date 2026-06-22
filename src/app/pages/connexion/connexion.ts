import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-connexion',
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.scss',
})
export class Connexion {}

import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatButtonModule
  ],
  templateUrl: './connexion.html',
  styleUrl: './connexion.scss',
})
export class Connexion {

  formBuilder = inject(FormBuilder)
  formulaire = this.formBuilder.group(
    {
      email : ["",[Validators.email, Validators.required]],
      password : ["",[Validators.required]]
    }
  )

}

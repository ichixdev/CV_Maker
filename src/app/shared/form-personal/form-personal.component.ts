import { Component, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-personal',
  standalone: true,
  imports: [CardComponent, CardComponent, ReactiveFormsModule],
  templateUrl: './form-personal.component.html',
  styleUrl: './form-personal.component.scss'
})
export class FormPersonalComponent {
  private readonly _formBuilder = inject(FormBuilder)
  aboutYouForm = this._formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    profesion: ['', Validators.required],
    sobreTi: ['', Validators.required],
    descripciónGeneral: ['', Validators.required],
  })

  nextForm(){
    console.log(this.aboutYouForm.value);
  }
}

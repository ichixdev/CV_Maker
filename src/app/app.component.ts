import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { FormPersonalComponent } from './shared/form-personal/form-personal.component';
import { FormStepsComponent } from './shared/form-steps/form-steps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    FormPersonalComponent,
    FormStepsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cvMaker';
}

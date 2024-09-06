import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPersonalComponent } from './shared/form-personal/form-personal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormPersonalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cvMaker';
}

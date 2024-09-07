import { Component, input, signal, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAddressBook,
  faBrain,
  faBriefcase,
  faGraduationCap,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons';
import { Step, Steps } from './form-steps.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-steps',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './form-steps.component.html',
  styleUrl: './form-steps.component.scss',
})
export class FormStepsComponent implements OnInit {
  faUserLarge = faUserLarge;
  faAddressBook = faAddressBook;
  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;
  faBrain = faBrain;

  currentStep = input.required<Step>();
  steps = signal<Steps[]>([
    {
      step: 1,
      icon: faUserLarge,
      state: 'active',
    },
    {
      step: 2,
      icon: faAddressBook,
      state: 'disabled',
    },
    {
      step: 3,
      icon: faBriefcase,
      state: 'disabled',
    },
    {
      step: 4,
      icon: faGraduationCap,
      state: 'disabled',
    },
    {
      step: 5,
      icon: faBrain,
      state: 'disabled',
    },
  ]);

  ngOnInit() {
    this.updateStepState(this.currentStep());
  }

  updateStepState(currentStep: number) {
    const stepsById = new Map(this.steps().map((item) => [item.step, item]));
    this.steps.set(
      Array.from(stepsById.values()).map((step) =>
        step.step === currentStep
          ? { ...step, state: 'active' }
          : { ...step, state: 'disabled' },
      ),
    );
  }
}

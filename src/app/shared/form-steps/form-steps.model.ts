import { IconDefinition } from '@fortawesome/angular-fontawesome';

export type StateSteps = 'active' | 'disabled' | '';
export type Step = 1 | 2 | 3 | 4 | 5 | 6;

export interface Steps {
  step: Step;
  icon: IconDefinition;
  state?: StateSteps;
}

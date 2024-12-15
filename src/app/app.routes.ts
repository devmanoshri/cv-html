import { Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'accordion',
    component: AccordionComponent,
  },
];

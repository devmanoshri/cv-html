import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgIf],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  isAccordionOpen: boolean = false;

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen
  }
}

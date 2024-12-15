import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { AccordionComponent } from "./accordion/accordion.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  generatePDF() {
    const elementToPrint: any = document.getElementById('contentToConvert');

    html2canvas(elementToPrint, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'A4',
        compress: true,
      });
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);

      pdf.setProperties({
        title: 'CV HTML to PDF',
        subject: 'PDF of CV',
        author: 'Manoshri',
      });

      pdf.setFontSize(12);
      pdf.save('manoshri-cv.pdf');
    });
  }
}

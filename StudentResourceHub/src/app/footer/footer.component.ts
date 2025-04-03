import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',  // Updated template URL
  styleUrls: ['./footer.component.css'],  // Updated styles URL
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}

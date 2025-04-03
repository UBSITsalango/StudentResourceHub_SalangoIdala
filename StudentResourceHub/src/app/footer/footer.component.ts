import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <p>&copy; {{ currentYear }} Student Resource Hub</p>
      <p>Team Members: Idala, Ashley | Salango, Tyrone </p>


      </footer>
  `,
  styles: [`
    .footer {
      width: 100%;
      text-align: center;
      padding: 10px;
      position: fixed;
      bottom: 0;
      background-color: #333;
      color: white;
    }
  `]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}

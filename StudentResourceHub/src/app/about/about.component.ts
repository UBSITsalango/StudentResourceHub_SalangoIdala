import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',  // Updated selector
  standalone: true,
  templateUrl: './about.component.html',  // Updated template URL
  styleUrls: ['./about.component.css'],  // Updated styles URL
  imports: [CommonModule, RouterLink]
})
export class AboutComponent {
  @Input() resource: { title: string; description: string; category: string; imageUrl: string } | null = null;

  goBack(): void {
    console.log('Navigating back to resource list');
  }
}

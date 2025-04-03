import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',  // Updated selector
  templateUrl: './home.component.html',  // Updated template URL
  styleUrls: ['./home.component.css'],  // Updated styles URL
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  resources: Resource[] = [
    { id: 1, title: 'Angular Basics', description: 'Introduction to Angular', category: 'Programming', imageUrl: 'assets/angular.png' },
    { id: 2, title: 'UI/UX Design Principles', description: 'Understanding UI/UX', category: 'Design', imageUrl: 'assets/design.png' },
    { id: 3, title: 'Calculus Guide', description: 'Math resources for beginners', category: 'Math', imageUrl: 'assets/calculus.png' }
  ];

  constructor() {}

  ngOnInit(): void {}

  viewDetails(id: number): void {
    console.log(`Viewing details for resource ${id}`);
  }
}

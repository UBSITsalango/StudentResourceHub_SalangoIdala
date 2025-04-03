import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
}

interface Category {
  title: string;
  description: string;
}

@Component({
  selector: 'app-categories',  // Updated selector
  templateUrl: './categories.component.html',  // Updated template URL
  styleUrls: ['./categories.component.css'],  // Updated styles URL
  imports: [CommonModule, RouterOutlet]
})
export class CategoriesComponent implements OnInit {
  @Input() category: Category | null = null; // Category passed as input
  resources: Resource[] = [];

  allResources: Resource[] = [
    { id: 1, title: 'Angular Basics', description: 'Introduction to Angular', category: 'Programming' },
    { id: 2, title: 'UI/UX Design Principles', description: 'Understanding UI/UX', category: 'Design' },
    { id: 3, title: 'Calculus Guide', description: 'Math resources for beginners', category: 'Math' },
    { id: 4, title: 'React Introduction', description: 'Learn React', category: 'Programming' }
  ];

  ngOnInit(): void {
    if (this.category) {
      this.filterResourcesByCategory(this.category.title);
    }
  }

  filterResourcesByCategory(category: string): void {
    this.resources = this.allResources.filter(resource => resource.category === category);
  }

  viewDetails(id: number): void {
    console.log(`Viewing details for resource ${id}`);
  }
}

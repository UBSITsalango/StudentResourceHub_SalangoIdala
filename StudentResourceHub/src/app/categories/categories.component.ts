import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Resource } from '../models/resource';
import { RESOURCES_DATA } from '../data/resources-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  imports: [CommonModule, RouterLink, RouterOutlet]
})
export class CategoriesComponent implements OnInit {
  resources: Resource[] = RESOURCES_DATA;
  category!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the category from the route parameter
    this.category = this.route.snapshot.paramMap.get('category')!;
    
    // Filter resources based on the category
    this.resources = RESOURCES_DATA.filter(
      res => res.category.toLowerCase() === this.category.toLowerCase()
    );
  }
}

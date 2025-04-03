import { Component } from '@angular/core';
import { Resource } from '../../models/resource';
import { RESOURCES_DATA } from '../../data/resources-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
  imports: [CommonModule, RouterLink]
})
export class DesignComponent {
  // Filter resources where the category is 'Design'
  resources: Resource[] = RESOURCES_DATA.filter(resource => resource.category === 'Design');
}

import { Component } from '@angular/core';
import { Resource } from '../../models/resource';
import { RESOURCES_DATA } from '../../data/resources-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css'],
  imports: [CommonModule, RouterLink]
})
export class ProgrammingComponent {
  // Filter resources where the category is 'Programming'
  resources: Resource[] = RESOURCES_DATA.filter(resource => resource.category === 'Programming');
}

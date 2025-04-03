import { Component } from '@angular/core';
import { Resource } from '../../models/resource';
import { RESOURCES_DATA } from '../../data/resources-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
  imports: [CommonModule, RouterLink]
})
export class MathComponent {
  // Filter resources where the category is 'Math'
  resources: Resource[] = RESOURCES_DATA.filter(resource => resource.category === 'Math');
}

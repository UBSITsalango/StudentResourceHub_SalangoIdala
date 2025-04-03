import { Component } from '@angular/core';
import { Resource } from '../models/resource';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RESOURCES_DATA } from '../data/resources-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterLink]
})
export class HomeComponent {
  resources: Resource[] = RESOURCES_DATA;
}

import { Component } from '@angular/core';
import { Resource } from '../models/resource';
import { ResourceService } from '../services/resource.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AddResourceComponent {
  newResource: Resource = {
    id: 0,
    title: '',
    description: '',
    category: 'Programming', // Default category
    url: '',
    author: '',
    publicationDate: new Date(),
    isFeatured: false,
    imageUrl: ''
  };

  constructor(private resourceService: ResourceService, private router: Router) {}

  onSubmit() {
    this.resourceService.addResource(this.newResource);
    this.router.navigate(['/']); // Navigate back to home page after adding the resource
  }
}

import { Injectable } from '@angular/core';
import { Resource } from '../models/resource';
import { RESOURCES_DATA } from '../data/resources-data';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class ResourceService {

  constructor() {}

  // Method to add a resource
  addResource(resource: Resource) {
    // Simple logic for generating a unique ID
    resource.id = RESOURCES_DATA.length + 1;
    RESOURCES_DATA.push(resource); // Add resource to the data
  }

  // Method to get all resources
  getResources(): Resource[] {
    return RESOURCES_DATA; // Return all resources
  }
}

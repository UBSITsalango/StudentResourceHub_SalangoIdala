import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-resource',  // Updated selector
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-resource.component.html',  // Updated template URL
  styleUrls: ['./add-resource.component.css']  // Updated styles URL
})
export class AddResourceComponent {
  resource = { title: '', description: '', category: '' };

  @Output() resourceAdded = new EventEmitter<{ title: string; description: string; category: string }>();

  addResource() {
    if (this.resource.title && this.resource.description && this.resource.category) {
      this.resourceAdded.emit(this.resource);
      this.resource = { title: '', description: '', category: '' }; // Reset form
    }
  }
}

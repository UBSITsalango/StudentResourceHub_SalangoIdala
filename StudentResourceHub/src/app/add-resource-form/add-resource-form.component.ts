import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-resource-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.css']
})
export class AddResourceFormComponent {
  resource = { title: '', description: '', category: '' };

  @Output() resourceAdded = new EventEmitter<{ title: string; description: string; category: string }>();

  addResource() {
    if (this.resource.title && this.resource.description && this.resource.category) {
      this.resourceAdded.emit(this.resource);
      this.resource = { title: '', description: '', category: '' }; // Reset form
    }
  }
}

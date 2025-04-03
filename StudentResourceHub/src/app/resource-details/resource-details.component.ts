import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-details',
  standalone: true,
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent {
  @Input() resource: { title: string; description: string; category: string } | null = null;
}

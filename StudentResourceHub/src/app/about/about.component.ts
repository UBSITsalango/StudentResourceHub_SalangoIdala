import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Resource } from '../models/resource';
import { RESOURCES_DATA } from '../data/resources-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, RouterLink]
})
export class AboutComponent {
  resource!: Resource;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resourceId = Number(this.route.snapshot.paramMap.get('id'));
    this.resource = RESOURCES_DATA.find(res => res.id === resourceId)!;
  }
}

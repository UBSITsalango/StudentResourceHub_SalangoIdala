import { Component, OnInit } from '@angular/core';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  resources: Resource[] = [
    { id: 1, title: 'Angular Basics', description: 'Introduction to Angular', category: 'Programming' },
    { id: 2, title: 'UI/UX Design Principles', description: 'Understanding UI/UX', category: 'Design' },
    { id: 3, title: 'Calculus Guide', description: 'Math resources for beginners', category: 'Math' }
  ];

  constructor() {}

  ngOnInit(): void {}
}

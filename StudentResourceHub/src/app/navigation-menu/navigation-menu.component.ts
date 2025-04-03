import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',  // Updated template URL
  styleUrls: ['./navigation-menu.component.css'],  // Updated styles URL
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule]
})
export class NavigationMenuComponent {}

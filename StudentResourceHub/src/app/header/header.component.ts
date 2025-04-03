import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, NavigationMenuComponent]
})
export class HeaderComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  template: `
    <nav class="nav-menu">
      <ul>
        <li><a routerLink="/home">Home</a></li>
        <li class="dropdown">
          <a href="#">Categories</a>
          <ul class="dropdown-menu">
            <li><a routerLink="/categories/programming">Programming</a></li>
            <li><a routerLink="/categories/design">Design</a></li>
            <li><a routerLink="/categories/math">Math</a></li>
          </ul>
        </li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/add-resource">Add Resource</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .nav-menu ul {
      list-style: none;
      display: flex;
      gap: 15px;
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      background: white;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      padding: 10px;
    }
    .dropdown:hover .dropdown-menu {
      display: block;
    }
  `]
})
export class NavigationMenuComponent {}

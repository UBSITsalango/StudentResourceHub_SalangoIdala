import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="title">Student Resource Hub</div>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li class="dropdown">
            <a href="#">Categories</a>
            <ul class="dropdown-menu">
              <li><a href="/categories/programming">Programming</a></li>
              <li><a href="/categories/design">Design</a></li>
              <li><a href="/categories/math">Math</a></li>
            </ul>
          </li>
          <li><a href="/about">About</a></li>
          <li><a href="/add-resource">Add Resource</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #007bff;
      color: white;
      padding: 10px 20px;
    }
    .title {
      font-size: 1.5em;
      font-weight: bold;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 15px;
    }
    nav ul li {
      position: relative;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      background: white;
      color: black;
      list-style: none;
      padding: 10px;
      top: 100%;
      left: 0;
    }
    .dropdown:hover .dropdown-menu {
      display: block;
    }
  `]
})
export class HeaderComponent {}

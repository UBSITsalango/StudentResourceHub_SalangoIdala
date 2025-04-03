import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ProgrammingComponent } from './categories/programming/programming.component';
import { DesignComponent } from './categories/design/design.component';
import { MathComponent } from './categories/math/math.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'categories', 
    component: CategoriesComponent,
    children: [
      { path: 'programming', component: ProgrammingComponent },
      { path: 'design', component: DesignComponent },
      { path: 'math', component: MathComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'add-resource', component: AddResourceComponent }
];

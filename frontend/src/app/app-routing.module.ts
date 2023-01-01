import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPagesComponent } from './components/pages/food-pages/food-pages.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodPagesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

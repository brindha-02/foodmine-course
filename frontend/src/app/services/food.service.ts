import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAllFoodsBySearchTerm(searchTerm: any): Food[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getAll():Food[]{
    return sample_foods;
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(Food => Food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags;

  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(food => Food.tags?.includes(tag));
    }
    getFoodById(foodId:string):Food{
      return this.getAll().find(food => food.id == foodId)  ?? new Food();
    }
  }


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-pages',
  templateUrl: './food-pages.component.html',
  styleUrls: ['./food-pages.component.css']
})
export class FoodPagesComponent {
  food!:Food;
  constructor(activatedRoute:ActivatedRoute, foodservice:FoodService){
    activatedRoute.params.subscribe((params)=> {

      if(params.id)
      this.food = foodservice.getFoodById(params.id);

    })
  }

}

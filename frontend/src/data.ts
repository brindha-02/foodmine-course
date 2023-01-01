import {Food} from './app/shared/models/food';
import { Tag } from './app/shared/models/tag';

export const sample_foods: Food[]=[
  {
  id:'1',
  name:'americano',
  price:7,
  makingtime:'10-20',
  favourite:true,
  origins: ['Italy'],
  stars:4.8,
  imageUrl:'src/food-1.jpg',
  tags: ['Cooldrink','Hotdrink'],
  },
  {
  id:'2',
  name:'espresso',
  price:15,
  makingtime:'15-20',
  favourite:false,
  origins: ['Italy'],
  stars:4.7,
  imageUrl:'src/food-2.jpg',
  tags: ['Hotdrink'],
  },
  {
  id:'3',
  name:'cappuccino',
  price:9,
  makingtime:'10-15',
  favourite:false,
  origins: ['Italy'],
  stars:4.0,
  imageUrl:'src/food-3.jpg',
  tags: ['Cooldrink','Hotdrink'],
  },
  {
  id:'4',
  name:'donuts',
  price:12,
  makingtime:'10-15',
  favourite:true,
  origins: ['New York'],
  stars:4.1,
  imageUrl:'src/food-4.jpg',
  tags: ['Sweet'],
  },
  {
  id:'5',
  name:'latte',
  price:10,
  makingtime:'25-30',
  favourite:true,
  origins: ['Italy'],
  stars:4.6,
  imageUrl:'src/food-5.jpg',
  tags: ['Cooldrink'],
  },
  {
  id:'6',
  name:'pastries',
  price:15,
  makingtime:'20-25',
  favourite:false,
  origins: ['Egypt'],
  stars:4.2,
  imageUrl:'src/food-6.jpg',
  tags: ['Sweet'],
  },


]

export const sample_tags:Tag[] =[
  {name:'All',count:6},




]

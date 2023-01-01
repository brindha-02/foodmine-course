export class Food{
  id!:string;
  name!:string;
  price!:number;
  tags?:string[];
  favourite!:boolean;
  stars!:number;
  imageUrl!:string;
  origins!:string[];
  makingtime!:string;
  static tags: any;
}

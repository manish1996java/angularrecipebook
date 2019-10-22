import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoplistService {
  addRecipeListern = new EventEmitter();
  onEditIngredient = new EventEmitter();
  private ingredients:Ingredient[]=[];

  constructor() {
    this.ingredients = [
      new Ingredient('kalimirchi',20),
      new Ingredient('bread',20),
      new Ingredient('butter',20),
      new Ingredient('kissmiss',20),
      new Ingredient('kajus',20),

  ];
   }

  getIngByIndex(index:number){
    return this.ingredients[index];
  }
  addIngredent(ingredient:Ingredient){ 
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    this.addRecipeListern.emit([...this.ingredients]);
  }

  getIngredients(){
    return [...this.ingredients];
  }
  
}
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ShoplistService } from './shoplist.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  ingredients:Ingredient[]=[]
  
  panelOpenState = false;

  constructor(public shoplistserv:ShoplistService) {}

  ngOnInit() {
      this.ingredients = this.shoplistserv.getIngredients();
      this.shoplistserv.addRecipeListern.subscribe(ingredientarray=>{
          this.ingredients = ingredientarray;
      });
  }

  onEditIngredient(index:number){
    this.shoplistserv.onEditIngredient.next(index);
  }

}

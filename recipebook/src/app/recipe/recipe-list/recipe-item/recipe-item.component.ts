import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem:Recipe;
  @Input() index:number;

  constructor() {
    console.log(this.recipeItem);
    console.log(this.index);
   }

  ngOnInit() {
  }

}

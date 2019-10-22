import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList:Recipe[]=[];

  constructor(private recipeservice:RecipeService) { }

  ngOnInit() {
    this.recipeList = this.recipeservice.getRecipeList();
    this.recipeservice.recipeListener().subscribe((recipeList:Recipe[])=>{
      console.log("list update");
      this.recipeList = recipeList;
    })
  }

}

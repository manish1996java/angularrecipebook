import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeItem:Recipe;
  id:number;
  constructor(public recipeService:RecipeService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        this.id = + params['id'];
        this.recipeItem = this.recipeService.getRecipe(this.id);
        this.recipeService.recipeListener().subscribe(()=>{  
          this.recipeItem = this.recipeService.getRecipe(this.id);
        });
        console.log("check",this.recipeItem);

    })
    console.log("inside recipe detail",this.recipeItem);
  }
  editRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  addToShopList(){
    // this.recipeService.addToShopList(this.recipeItem);
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeItem.id);
  }

}

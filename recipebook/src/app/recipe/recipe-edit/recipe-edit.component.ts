import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/models/recipe';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeItem:Recipe;
  recipeItemIndex:number;
  recipeForm:FormGroup;
  editMode:boolean;

  constructor(public receipeService:RecipeService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      console.log(params['id']);
      this.recipeItemIndex = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
    
  }

  initForm(){
    let title:string = '';
    let description:string  = '';
    let imageUrl:string = '';

    if(this.editMode){
      this.recipeItem = this.receipeService.getRecipe(this.recipeItemIndex);
      this.receipeService.recipeListener().subscribe(()=>{

      });
      title = this.recipeItem.title,
      description = this.recipeItem.description,
      imageUrl = this.recipeItem.imageUrl
    }
    
    console.log("this is working");

    this.recipeForm = new FormGroup({
      'title': new FormControl(title,[Validators.required]),
      'imageUrl': new FormControl(imageUrl,[Validators.required]),
      'description': new FormControl(description,[Validators.required]),
      'ingredients': new FormArray([])
    })
    
  }

  
  addIngredient(){
    
    const ingredient = new FormControl();
    (<FormArray>this.recipeForm.get('ingredients')).push(ingredient);
    console.log(this.recipeForm.get('ingredients'));
  }

  save(){
    let title:string = this.recipeForm.get('title').value;
    let description:string  = this.recipeForm.get('description').value;
    let imageUrl:string = this.recipeForm.get('imageUrl').value;
    this.receipeService.saveRecipe({title:title,description:description,imageUrl:imageUrl});
    this.recipeForm.reset();
  }
  delete(){
    // this.receipeService.deleteRecipe();
  }
  clearForm(){
    this.recipeForm.reset();
  }
  
  edit(){
    let title:string = this.recipeForm.get('title').value;
    let description:string  = this.recipeForm.get('description').value;
    let imageUrl:string = this.recipeForm.get('imageUrl').value;

    this.receipeService.editRecipe(this.recipeItem.id,{title:title,description:description,imageUrl:imageUrl});
  }
}

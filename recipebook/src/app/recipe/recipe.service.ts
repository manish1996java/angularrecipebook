import { Injectable, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { ShoplistService } from '../shoplist/shoplist.service';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipelisten = new Subject(); 
  private recipeList:Recipe[] = [];

  constructor(public shoplistSevice:ShoplistService, private http:HttpClient) {
    console.log("constructor work");
    this.getRecipeFrSrv();
    // this.recipeList = [
    //   new Recipe(0,"Momos","momos is very tasty afgdsgsdgsdgsdgdsgdgsdgsdgsgdgdsg","https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2015/10/Feature.jpg"),
    //   new Recipe(1,"Burger","Bureger is very tasty","http://images.kglobalservices.com/www.allbran.ca_en/en_ca/recipe/kicrecipe-13926/recip_img-5840949_highfibreburger_2160x2160.jpg"),
    //   new Recipe(2,"Pizza","Pizza is very tasty","https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg"),
    //   new Recipe(3,"Donuts","Donuts is very tasty","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlidEGCxhmpeddJQbzq53AAjxx9-rEcfwFkH4KDdsen3gm_H2IQ"),
    //   new Recipe(4,"Macroni","Macroni is very tasty","https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/02/MACRONI-2.jpg?resize=575%2C262"),
    //   new Recipe(5,"Noodles","Noodles is very tasty","https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg"),
    //   new Recipe(6,"Soup","Soup is very tasty","https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg"),
    // ]
   }

  getRecipeFrSrv(){
    console.log("getRecipework");
    this.http.get<{message:string,recipes:any}>("http://localhost:8888/recipe/fetch")
    .pipe(map(recipeData=>{
       return recipeData.recipes.map((recipe)=>{
          return {
            id: recipe._id,
            title: recipe.title,
            description: recipe.description,
            imageUrl: recipe.imageUrl
          }
       })
    }))
    .subscribe((recipeData)=>{
      console.log(recipeData);
      this.recipeList = recipeData;
      this.recipelisten.next(this.recipeList);
      console.log('subscribe form srv',recipeData);
      console.log(this.recipeList);
    }) 
  }
  recipeListener(){
    console.log("listener call");
    return this.recipelisten.asObservable();
  }
  getRecipe(index:number){
    return this.recipeList[index];
  }
  getRecipeList(){
    return [...this.recipeList];
  }

  deleteRecipe(id:string){
    this.http.delete('http://localhost:8888/recipe/delete/'+id).subscribe((response:{message:string})=>{
        console.log(response.message);
        this.getRecipeFrSrv();
    })
  }
  editRecipe(id:string,payload){
    this.http.put('http://localhost:8888/recipe/delete/'+id,payload).subscribe((response:{message:string})=>{
      console.log(response);
      this.getRecipeFrSrv();
    })
  }

  saveRecipe(recipe:{title:string,description:string,imageUrl:string}){
    console.log(recipe);
    this.http.post('http://localhost:8888/recipe/save',recipe).subscribe((response:{message:string})=>{
      console.log(response);  
      this.getRecipeFrSrv();
    })
  }
  // addToShopList(recipe:Recipe){
  //   this.shoplistSevice.addRecipe(recipe);
  // }
}

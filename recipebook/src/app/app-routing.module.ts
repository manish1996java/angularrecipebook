import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path:'', component:HomeComponent,pathMatch:"full"},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'shoplist',component: ShoplistComponent},
  { path:'recipe',component: RecipeComponent ,children:[
    { path:'', component: RecipeStartComponent},
    { path:'new',component: RecipeEditComponent},
    { path:':id', component: RecipeDetailComponent},
    { path:':id/edit',component: RecipeEditComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

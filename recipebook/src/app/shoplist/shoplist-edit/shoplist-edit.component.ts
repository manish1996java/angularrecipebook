import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoplistService } from '../shoplist.service';

@Component({
  selector: 'app-shoplist-edit',
  templateUrl: './shoplist-edit.component.html',
  styleUrls: ['./shoplist-edit.component.css']
})
export class ShoplistEditComponent implements OnInit {
  @ViewChild('f') form:NgForm;
  editMode:boolean = false;
  ingredient:Ingredient;
  constructor(public shoplistsrv:ShoplistService) { }

  ngOnInit() {
    this.shoplistsrv.onEditIngredient.subscribe((index:number)=>{
      this.ingredient = this.shoplistsrv.getIngByIndex(index);
      console.log(this.ingredient);
      this.form.setValue({
        name:this.ingredient.name,
        amt:this.ingredient.amt
      })

      this.editMode=true;
    })
  }
  save(form:NgForm){
    console.log(form.value.name);
    console.log(form.value.amt);
    const ingredient = new Ingredient(form.value.name,form.value.amt);
    if(this.editMode){
      console.log("edit item call");
    }else{
      this.shoplistsrv.addIngredent(ingredient);
    }
    this.form.reset();
    this.editMode=false;
  }
  clear(){
    this.form.reset();
    this.editMode=false;
  }
  delete(){
    console.log("on delete");
  }

}

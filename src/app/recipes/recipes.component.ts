import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
// import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  
})
export class RecipesComponent implements OnInit {
  // recipeItem: Recipe;
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected
    // .subscribe(
    //   (recipe: Recipe)=>{
    //     this.recipeItem = recipe;
    //   }
    // );
  }
  
  // onRecipeItem(recipe: Recipe){
  //   this.recipeItem = recipe;
  // }
}

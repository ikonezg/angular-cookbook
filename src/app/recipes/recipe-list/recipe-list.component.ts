
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cufte', 'Cufte italiano', 'http://wall.hr/cdn/uploads/850x/2012/09/aac8366c/becki-snicel.jpg'),
    new Recipe('Cufteeeee', 'Cufte italiano', 'http://wall.hr/cdn/uploads/850x/2012/09/aac8366c/becki-snicel.jpg')
    
  ];
  
  @Output() recipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onEmitedRecipe(recipeEmited: Recipe){
    this.recipe.emit(recipeEmited);
  }
}

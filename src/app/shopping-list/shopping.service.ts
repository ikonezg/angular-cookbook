import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingService {
  ingredientChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('Beef', 1),
    new Ingredient('Mrkvica', 5),
    ];

  constructor() { }
  
  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(recipeIngredients: Ingredient[]){
    this.ingredients.push(...recipeIngredients);
    
    this.ingredientChanged.next(this.ingredients.slice());
  }
}

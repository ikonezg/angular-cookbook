import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
  // recipeSelected= new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Cufte',
      'Cufte italiano',
      'http://wall.hr/cdn/uploads/850x/2012/09/aac8366c/becki-snicel.jpg',
      [
        new Ingredient('Meso', 1),
        new Ingredient('Riza', 0.5),
        new Ingredient('Pelati', 1)

      ]
    ),
    new Recipe('Shusi',
      'Cufte italiano',
      'https://mms17-makemysushi.netdna-ssl.com/wp-content/uploads/2016/02/california_roll_sushi_white.jpg',
      [
        new Ingredient('Tofu', 1),
        new Ingredient('Riza', 0.5),
        new Ingredient('Riba', 1)
      ]
    )

  ];
  constructor(private slService: ShoppingService) { }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe){
     this.recipes.push(recipe);
     this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  deleteRecipe(index: number){
    console.log('cibona',index);
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());

  }

}

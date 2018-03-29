import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipe(){
    return this.http.put('https://ng-recipe-book-a9f71.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

}
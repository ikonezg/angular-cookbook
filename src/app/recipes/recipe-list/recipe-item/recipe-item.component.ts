
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeEmiter = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelectRecipe(){
    // this.recipeEmiter.emit(this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

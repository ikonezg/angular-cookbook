import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();

    this.subscription =  this.shoppingService.ingredientChanged
    .subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });

   
  };
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingService.startedEditing.next(index);
  }
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient );
  // }
}

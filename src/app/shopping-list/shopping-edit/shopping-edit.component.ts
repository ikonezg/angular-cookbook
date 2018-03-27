import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItemIngredient: Ingredient;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription =  this.shoppingService.startedEditing
      .subscribe((index: number)=>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItemIngredient = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItemIngredient.name,
          amount: this.editedItemIngredient.amount
        });
    });
  };
  ngOnDestroy(){
    this.subscription.unsubscribe();
  };
  

  onAddItem(form: NgForm){
    // this.ingredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    
    // const  name: string = this.nameInputRef.nativeElement.value;
    // const amount: number = this.amountInputRef.nativeElement.value;

    const value  = form.value;
    let newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingService.addIngredient(newIngredient);
  }
}

import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cufte', 'Cufte italiano', 'http://wall.hr/cdn/uploads/850x/2012/09/aac8366c/becki-snicel.jpg'),
    new Recipe('Cufte', 'Cufte italiano', 'http://wall.hr/cdn/uploads/850x/2012/09/aac8366c/becki-snicel.jpg')
    
  ];
  

  constructor() { }

  ngOnInit() {
  }

}

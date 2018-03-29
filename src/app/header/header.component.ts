import { Component } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    // @Output() component = new EventEmitter<string>();

    // onSelect(pageComponent: string){
    //     this.component.emit(pageComponent);
    // }
  constructor(private dataStorageService: DataStorageService){}

  onSaveData(){
    this.dataStorageService.storeRecipe().subscribe( (response: Response) => {
      console.log(response);
    });
  }
}

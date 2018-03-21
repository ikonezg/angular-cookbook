import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Output() component = new EventEmitter<string>(); 

    onSelect(pageComponent: string){
        this.component.emit(pageComponent);
    }
}
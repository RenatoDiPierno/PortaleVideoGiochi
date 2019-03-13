import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output('showSection')

  showSectionEvent: EventEmitter<number> = new EventEmitter();
 
  changeBody(id: number){
    this.showSectionEvent.emit(id);
  }
}

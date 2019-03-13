import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PortaleVideoGiochi';


  idChange: number = 0;

  changeSection(id: number){
    this.idChange=id;
  }
 
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { MenuItem } from '../Obj/MenuItem';
import { MenuService } from '../Service/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }
  menu: MenuItem[];

  ngOnInit() {
    this.menu = this.menuService.getList();
  }
}

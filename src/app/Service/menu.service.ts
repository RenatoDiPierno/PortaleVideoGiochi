import { Injectable } from '@angular/core';
import { MenuItem } from '../Obj/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  listMenu: Array<MenuItem> = [
    new MenuItem('Home', '/'+'home'),
    new MenuItem('Giochi', '/'+'game-list'),
    new MenuItem('Modifica', '/'+'edit-game'),
  ]


  constructor() { }

  getList() {
    return this.listMenu;
  }

}

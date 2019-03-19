import { Injectable } from '@angular/core';
import { MenuItem } from '../Obj/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  listMenu: Array<MenuItem> = [
    new MenuItem('Home'),
    new MenuItem('Giochi'),
    new MenuItem('Modifica'),
  ]
  constructor() { }

  getList() {
    return this.listMenu;
  }

}

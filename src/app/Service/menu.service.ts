import { Injectable } from '@angular/core';
import { MenuItem } from '../Obj/MenuItem';
import { RoutingEnum } from '../routingenum';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  listMenu: Array<MenuItem> = [
    new MenuItem('Home', '/'+RoutingEnum.base + '/' + RoutingEnum.home),
    new MenuItem('Giochi','/'+RoutingEnum.base + '/' + RoutingEnum.list),
    new MenuItem('Modifica','/'+RoutingEnum.base + '/' + RoutingEnum.edit),
  ]


  constructor() { }

  getList() {
    return this.listMenu;
  }

}

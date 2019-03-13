import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../Obj/MenuItem';
import { GameItem } from '../Obj/GameItem';
import { GameListService } from '../Service/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private gameService: GameListService){}
  list: GameItem[];


  ngOnInit() {
    this.list = this.gameService.getList();
  }
  
}

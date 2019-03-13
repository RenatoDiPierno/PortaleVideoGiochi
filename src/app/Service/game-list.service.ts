import { Injectable } from '@angular/core';
import { GameItem } from '../Obj/GameItem';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  listGame: GameItem[] = [
    new GameItem('Fifa', 0),
    new GameItem('GTA V', 1),
    new GameItem('Call Of Duty', 2),
  ]
  
  constructor() { }

  getList(){
    return this.listGame;
  }
}

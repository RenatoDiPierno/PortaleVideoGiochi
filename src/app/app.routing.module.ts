import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { EditGameComponent } from './edit-game/edit-game.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'game-list', component: GameListComponent},
    { path: 'edit-game', component: EditGameComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    
  ];
  

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'game-list', component: GameListComponent},
    { path: 'game-detail', component: GameDetailComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    
  ];
  

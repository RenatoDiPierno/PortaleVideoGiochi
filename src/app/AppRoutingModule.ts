import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { LoginComponent } from './login/login.component';
import { RoutingEnum } from './routingenum';
import { LoginControlsService } from './Service/login-controls.service';


export const appRoutes: Routes = [
  {
    path: RoutingEnum.base, children: [
      { path: RoutingEnum.home, component: HomeComponent },
      { path: RoutingEnum.list, component: GameListComponent },
      { path: RoutingEnum.edit, component: EditGameComponent },
    ],
    //canActivateChild: [LoginControlsService]
  },
  {path: RoutingEnum.login, component: LoginComponent},
  { path: '', redirectTo: RoutingEnum.base + '/' + RoutingEnum.home, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {

}

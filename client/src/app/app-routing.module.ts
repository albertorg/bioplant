import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {StartingComponent} from './components/start/starting/starting.component';
import {TutorialComponent} from './components/tutorial/tutorial.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'starting', component: StartingComponent},
  {path: 'tutorial', component: TutorialComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


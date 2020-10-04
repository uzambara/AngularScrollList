import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewCardPageComponent} from './pages/new-card-page/new-card-page.component';
import {CardInfoPageComponent} from './pages/card-info-page/card-info-page.component';
import {CardListPageComponent} from './pages/card-list-page/card-list-page.component';

const routes: Routes = [
  { path: '', component: CardListPageComponent },
  { path: 'create', component: NewCardPageComponent },
  { path: 'info/:id', component: CardInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

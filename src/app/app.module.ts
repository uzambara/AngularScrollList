import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCardPageComponent } from './pages/new-card-page/new-card-page.component';
import { CardInfoPageComponent } from './pages/card-info-page/card-info-page.component';
import { CardListPageComponent } from './pages/card-list-page/card-list-page.component';
import { CardComponent } from './components/card/card.component';
import { FavoriteIconComponent } from './components/favorite-icon/favorite-icon.component';
import { EditIconComponent } from './components/edit-icon/edit-icon.component';
import { CardFormComponent } from './components/forms/card-form/card-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NewCardPageComponent,
    CardInfoPageComponent,
    CardListPageComponent,
    CardComponent,
    FavoriteIconComponent,
    EditIconComponent,
    CardFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

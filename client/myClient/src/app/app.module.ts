import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { ResultsComponent } from './results/results.component';
import { OnegameComponent } from './onegame/onegame.component';

const appRoutes: Routes = [
  { path: '', component: SearchFormComponent, pathMatch: 'full' },
  { path: 'gamedetails/:id', component: OnegameComponent, pathMatch: 'full' },
  { path: 'category/:category', component: CategorySearchComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategorySearchComponent,
    SearchFormComponent,
    ResultsComponent,
    OnegameComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

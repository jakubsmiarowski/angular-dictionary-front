import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';

import { AddDictionaryComponent } from './add-dictionary/add-dictionary.component';
import { ViewDictionaryComponent } from './view-dictionary/view-dictionary.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import {ViewMetaComponent} from './view-meta/view-meta.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/view-dict', pathMatch: 'full' },
  { path: 'add-dict', component: AddDictionaryComponent },
  { path: 'view-dict', component: ViewDictionaryComponent },
  { path: 'view-meta', component: ViewMetaComponent },
  { path: 'add-entry', component: AddEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

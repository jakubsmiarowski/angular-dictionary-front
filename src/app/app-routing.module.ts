import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDictionaryComponent } from './add-dictionary/add-dictionary.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import {ViewMetaComponent} from './view-meta/view-meta.component';
import {DictionaryDetailsComponent} from './dictionary/dictionary-details/dictionary-details.component';
import {DictionaryStartComponent} from './dictionary/dictionary-start/dictionary-start.component';
import {DictionaryResolverService} from './dictionary/dictionary.resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/view-dict', pathMatch: 'full' },
  { path: 'add-dict', component: AddDictionaryComponent },
  {
    path: 'view-dict',
    component: DictionaryComponent,
    children: [
      { path: ':id', component: DictionaryDetailsComponent/*, resolve: [DictionaryResolverService] */},
      { path: '', component: DictionaryStartComponent }
      ]
  },
  { path: 'view-meta', component: ViewMetaComponent },
  { path: 'add-entry', component: AddEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

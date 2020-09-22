import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddDictionaryComponent } from './add-dictionary/add-dictionary.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { ViewMetaComponent } from './view-meta/view-meta.component';
import { DictionaryListComponent } from './dictionary/dictionary-list/dictionary-list.component';
import { DictionaryListItemComponent } from './dictionary/dictionary-list/dictionary-list-item/dictionary-list-item.component';
import { DictionaryDetailsComponent } from './dictionary/dictionary-details/dictionary-details.component';
import { DictionaryStartComponent } from './dictionary/dictionary-start/dictionary-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddDictionaryComponent,
    DictionaryComponent,
    AddEntryComponent,
    ViewMetaComponent,
    DictionaryListComponent,
    DictionaryDetailsComponent,
    DictionaryListItemComponent,
    DictionaryStartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

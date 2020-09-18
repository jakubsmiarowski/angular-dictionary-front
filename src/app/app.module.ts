import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddDictionaryComponent } from './add-dictionary/add-dictionary.component';
import { ViewDictionaryComponent } from './view-dictionary/view-dictionary.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { ViewMetaComponent } from './view-meta/view-meta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddDictionaryComponent,
    ViewDictionaryComponent,
    AddEntryComponent,
    ViewMetaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

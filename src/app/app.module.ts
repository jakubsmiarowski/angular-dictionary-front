import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddDictionaryComponent } from './add-dictionary/add-dictionary.component';
import { ViewDictionaryComponent } from './view-dictionary/view-dictionary.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AddDictionaryComponent, ViewDictionaryComponent, AddEntryComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { SearchResultsComponent } from './search-results/search-results.component';
import {MatCardModule} from '@angular/material/card';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MediaDialogComponent } from './media-dialog/media-dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchBarComponent,
    MediaDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

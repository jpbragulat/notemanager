import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { AddCategComponent } from './components/add-categ/add-categ.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    NoteDetailsComponent,
    NotesListComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    AddCategComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

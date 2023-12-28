import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AddCategComponent } from './components/add-categ/add-categ.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'notemanager', pathMatch: 'full' },
  { path: 'notemanager', component: NotesListComponent },
  { path: 'editnotes/:id', component: NoteDetailsComponent },
  { path: 'editcategories/:id', component: CategoryDetailsComponent},
  { path: 'addnotes', component: AddNoteComponent },
  { path: 'addcategories', component: AddCategComponent},
  { path: 'getcategories', component: CategoryListComponent},
  { path: 'delcategories/:id', component: CategoryDetailsComponent}
  
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

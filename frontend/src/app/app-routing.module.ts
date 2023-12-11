import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AddCategComponent } from './components/add-categ/add-categ.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'notemanager', pathMatch: 'full' },
  { path: 'notemanager', component: NotesListComponent },
  { path: 'notemanager/:id', component: NoteDetailsComponent },
  { path: 'notemanager/addnote', component: AddNoteComponent },
  { path: 'notemanager/addcategory', component: AddCategComponent},
  { path: 'notemanager/categorylist', component: CategoryListComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

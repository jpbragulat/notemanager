import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { AddNoteComponent } from './components/add-note/add-note.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: NotesListComponent },
  { path: 'tutorials/:id', component: NoteDetailsComponent },
  { path: 'add', component: AddNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

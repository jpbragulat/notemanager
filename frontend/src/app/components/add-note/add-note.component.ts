import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  tutorial: Note = {
    title: '',
    description: '',
    archived: false,
    categoryId: undefined
  };
  submitted = false;

  constructor(private noteService: NoteService) {}

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      archived: this.tutorial.archived,
      categoryId: this.tutorial.categoryId
    };

    this.noteService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      archived: undefined,
      categoryId: undefined
    };
  }
}

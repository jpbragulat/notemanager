import { Component } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';


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
  categories: Category[] = [];

  constructor(
    private noteService: NoteService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
  }
  
  getAllCategories(): void {
    console.log("getAllCategories");
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  

  saveTutorial(): void {
    console.log("saveTutorial")
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
    console.log("ejecutando:getAllCategories");
    this.getAllCategories();
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      archived: undefined,
      categoryId: undefined
    };
  }
}

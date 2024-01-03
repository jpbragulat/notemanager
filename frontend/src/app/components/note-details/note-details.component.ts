import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';



@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css'],
})
export class NoteDetailsComponent {
  @Input() viewMode = false;

  @Input() currentTutorial: Note = {
    title: '',
    description: '',
    archived: false
  };

  categories: Category[] = [];
  message = '';

  constructor(
    private noteService: NoteService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      console.log("ngOnInit");
      this.getAllCategories();
      this.getTutorial(this.route.snapshot.params['id']);
    }
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

  getCategoryName(categoryId: number): string {
    //this.getAllCategories(); //asi funca pero lopea... porq no sale del ngoninit?
    console.log("categoryId:", categoryId);
    let i;
    
    const category = this.categories.find((c) => c.id === categoryId);
    console.log("categories:", this.categories); // porq esta vacio?
    console.log("Categoria Encontrada:", category);
    if (category) {
      console.log("getCategoryName:", category);
      return category.categoryName!; //asi no jode el undefined xq si no retorna string explota
    } 
    else {
      return 'unknown category';
    }
  }


  getTutorial(id: string): void {
    this.noteService.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateArchived(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      archived: status
    };

    this.message = '';

    this.noteService.update(this.currentTutorial.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentTutorial.archived = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateTutorial(): void {
    this.message = '';

    this.noteService
      .update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.noteService.delete(this.currentTutorial.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e)
    });
  }
}
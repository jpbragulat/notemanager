import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model'; 
import { CategoryService } from 'src/app/services/category.service';
//cambie los nombres de tutorial x noteCateg
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  noteCateg?: Category[];
  currentNoteCateg: Category = {};
  currentNoteCategIndex = -1;
  categoryName = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.retrieveNoteCateg();
  }

  retrieveNoteCateg(): void {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.noteCateg = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveNoteCateg();
    this.currentNoteCateg = {};
    this.currentNoteCategIndex = -1;
  }

  setActiveNoteCateg(noteCategAux: Category, index: number): void {
    console.log("valor Objeto Entrante: ", noteCategAux);
    this.currentNoteCateg = noteCategAux;
    console.log("valor current:", this.currentNoteCateg);
    this.currentNoteCategIndex = index;
    console.log("valor current index: ",this.currentNoteCategIndex);
    console.log("valor de currentNoteCateg.id", noteCategAux.id)
    console.log("valor de titulo:", noteCategAux.id);
  }

  removeAllNoteCateg(): void {
    this.categoryService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentNoteCateg = {};
    this.currentNoteCategIndex = -1;

    this.categoryService.findByTitle(this.categoryName).subscribe({
      next: (data) => {
        this.noteCateg = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
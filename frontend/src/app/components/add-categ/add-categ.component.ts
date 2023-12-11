import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';


@Component({
  selector: 'app-add-categ',
  templateUrl: './add-categ.component.html',
  styleUrls: ['./add-categ.component.css'],
})
export class AddCategComponent {
  tutorial: Category = {
    categoryName: '',
    categoryDescription: ''
    
  };
  submitted = false;

  constructor(private categoryService: CategoryService) {}

  saveTutorial(): void {
    const data = {
      categoryName: this.tutorial.categoryName,
      categoryDescription: this.tutorial.categoryDescription,
    };
      

    this.categoryService.create(data).subscribe({
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
      categoryName: '',
      categoryDescription: ''
    };
     
  }
}

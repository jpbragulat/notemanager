import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';



@Component({
    selector: 'app-category-details',
    templateUrl: './category-details.component.html',
    styleUrls: ['./category-details.component.css'],
  })

  export class CategoryDetailsComponent {
    @Input() viewMode = false;

    @Input() currentNoteCateg: Category = {
        categoryName: '',
        categoryDescription: ''
    };
    
    message = '';

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
      console.log("viewMode Value: ", this.viewMode);
      //this.viewMode = false;
      console.log("viewMode Value: ", this.viewMode);
        if (!this.viewMode) {
          this.message = '';
          this.getCategory(this.route.snapshot.params['id']);
        }
      }
    
      getCategory(id: string): void {
        console.log("inside getCategory");
        this.categoryService.get(id).subscribe({
            next: (data) => {
                this.currentNoteCateg = data;
                console.log(data);
            },
            error: (e) => console.error(e)

        });
      }
      
      updateCategory(): void {
        this.message = '';
        console.log("inside updateCategory");
        this.categoryService
        .update(this.currentNoteCateg.id, this.currentNoteCateg)
        .subscribe({
            next: (res) => {
                console.log(res);
                this.message = res.message
                    ? res.message
                    : 'This Category was updated successfully';

            },
            error: (e) => console.error(e)
        });
      }

      deleteCategory(): void {
        console.log("category id a borrar: ", this.currentNoteCateg.id);
        this.categoryService.delete(this.currentNoteCateg.id).subscribe({
            next: (res) => {
                console.log(res);
                this.router.navigate(['']);
            },
        }); 
      }
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Category } from '../models/category.model'; 
import { map } from 'rxjs/operators';

const baseUrl = 'https://localhost:44340/api/v1/categories/';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrl+'getCategories');
  }

  get(id: any): Observable<Category> {
    return this.http.get<Category>(`${baseUrl+'getCategories'}/${id}`);
  }

  create(data: any): Observable<any> {
 
    return this.http.post(baseUrl+'addCategories', data);
  }
      
 

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl+'editCategories'}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+'delCategories'}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(noteCategTitle: any): Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}?noteCategTitle=${noteCategTitle}`);
  }

}

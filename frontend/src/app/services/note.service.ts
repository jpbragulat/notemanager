import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';

const baseUrl = 'https://localhost:44340/api/v1/notes/';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(baseUrl+'getNotes');
  }

  get(id: any): Observable<Note> {
    return this.http.get<Note>(`${baseUrl+'getNote'}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'addNotes', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl+'editNotes'}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+'delNotes'}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Note[]> {
    return this.http.get<Note[]>(`${baseUrl}?title=${title}`);
  }
}

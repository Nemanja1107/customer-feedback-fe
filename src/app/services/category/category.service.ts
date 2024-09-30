import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  findAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + "category");
  }

}

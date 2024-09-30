import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../models/review/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAllRecentReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl + "review/recent")
  }

  getTopRatedReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl + "review/top");
  }
}

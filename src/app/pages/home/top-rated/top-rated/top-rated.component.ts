import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Review } from '../../../../models/review/review.model';
import { ReviewService } from '../../../../services/review/review.service';

@Component({
  selector: 'app-top-rated',
  standalone: true,
  imports: [NgFor],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css'
})
export class TopRatedComponent {

  topRated: Review[] = []
  stars: number[] = Array(5).fill(0)

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getTopRatedReviews().subscribe(result => {
      this.topRated = result;
    })
  }
}

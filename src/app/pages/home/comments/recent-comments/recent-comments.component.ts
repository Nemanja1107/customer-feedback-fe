import { Component } from '@angular/core';
import { Review } from '../../../../models/review/review.model';
import { ReviewService } from '../../../../services/review/review.service';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-recent-comments',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './recent-comments.component.html',
  styleUrl: './recent-comments.component.css'
})
export class RecentCommentsComponent {

  recentReviews: Review[] = []
  stars: number[] = Array(5).fill(0);

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getAllRecentReviews().subscribe(result => {
      this.recentReviews = result;
    })
  }
}

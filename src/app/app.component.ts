import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/home/header/header/header.component";
import { FooterComponent } from "./pages/home/footer/footer/footer.component";
import { SearchComponent } from './pages/home/search/search/search.component';
import { CategoryComponent } from './pages/home/category/category/category.component';
import { RecentCommentsComponent } from "./pages/home/comments/recent-comments/recent-comments.component";
import { TopRatedComponent } from "./pages/home/top-rated/top-rated/top-rated.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SearchComponent, CategoryComponent, RecentCommentsComponent, TopRatedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-feedback-fe';
}

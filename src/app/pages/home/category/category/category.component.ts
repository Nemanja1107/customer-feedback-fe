import { Component } from '@angular/core';
import { CategoryService } from '../../../../services/category/category.service';
import { Category } from '../../../../models/category/category.model';
import { NgClass, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.findAllCategories().subscribe(result => {
      this.categories = result;
    });
  }
}

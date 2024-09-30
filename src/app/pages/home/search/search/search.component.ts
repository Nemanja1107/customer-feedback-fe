import { Component } from '@angular/core';
import { Store } from '../../../../models/store/store.model';
import { StoreService } from '../../../../services/store/store.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  stores: Store[] = []
  searchedStores: Store[] = []

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getAllStores().subscribe(result => {
      this.stores = result;
    })
  }
}

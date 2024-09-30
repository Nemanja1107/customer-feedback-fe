import { Component } from '@angular/core';
import { StoreService } from '../../../../services/store/store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private storeService: StoreService) { }

  goToAllStorePage() {
    console.log("RADI")
  }
}

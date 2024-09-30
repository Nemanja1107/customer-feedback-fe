import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../models/store/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private urlApi = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAllStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.urlApi + "store")
  }

}

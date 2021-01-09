import { ItemsI } from './../entities/items.entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from './../../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  public fetchSearchProducts(query: string): Observable<ItemsI[]> {
    const url = ENV.api.searchProducts;

    // return this.http.get<any>(url);
    return of([{ name: '' }, { name: '' }]);
  }

  public fetchProductDetail(id: string): Observable<ItemsI> {
    const url = ENV.api.detailProduct;

    // return this.http.get<any>(url);
    return of({ name: '' });
  }
}

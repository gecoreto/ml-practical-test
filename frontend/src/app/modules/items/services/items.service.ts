import { map } from 'rxjs/operators';
import { ItemsI } from './../entities/items.entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from './../../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  public fetchSearchProducts(
    query: string
  ): Observable<{ items: ItemsI[]; categories: string[] }> {
    const url = ENV.api.server_url + `?q=${query}`;
    return this.http.get<any>(url).pipe(
      map(({ items, categories }) => ({
        items: items.filter((prod, i) => i < 4),
        categories,
      }))
    );
  }

  public fetchProductDetail(id: string): Observable<ItemsI> {
    const url = ENV.api.server_url + `/${id}`;
    return this.http.get<any>(url).pipe(map(({ item }) => item));
  }
}

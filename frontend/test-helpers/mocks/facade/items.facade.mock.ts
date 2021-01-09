import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemsI } from 'src/app/modules/items/entities/items.entity';

@Injectable()
export class ItemsFacadeMock {
  public items$: Observable<ItemsI[]> = new BehaviorSubject([]);
  public product$: Observable<ItemsI> = new BehaviorSubject(null);

  public working$: Observable<boolean> = new BehaviorSubject(false);

  public fetchSearchProducts(query: string): void {}

  public fetchProductDetail(id: string): void {}
}

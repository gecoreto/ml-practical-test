import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemsI } from './entities/items.entity';
import { fetchProductDetail, fetchSearchProducts, itemsClearStore } from './store/items.actions';
import {
  itemsSelector,
  workingSelector,
  productSelector,
  categoriesSelector,
} from './store/items.selector';

@Injectable()
export class ItemsFacade {
  public items$: Observable<ItemsI[]> = this.store.pipe(select(itemsSelector));
  public product$: Observable<ItemsI> = this.store.pipe(
    select(productSelector)
  );
  public categories$: Observable<string[]> = this.store.pipe(
    select(categoriesSelector)
  );

  public working$: Observable<boolean> = this.store.pipe(
    select(workingSelector)
  );

  constructor(protected store: Store<any>) {}

  public fetchSearchProducts(query: string): void {
    this.store.dispatch(fetchSearchProducts({ query }));
  }

  public fetchProductDetail(id: string): void {
    this.store.dispatch(fetchProductDetail({ id }));
  }

  public itemsClearStore(): void {
    this.store.dispatch(itemsClearStore());
  }
}

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemsI } from './entities/items.entity';
import { fetchSearchProducts } from './store/items.actions';
import { itemsSelector, workingSelector } from './store/items.selector';

@Injectable()
export class ItemsFacade {
  public items$: Observable<ItemsI[]> = this.store.pipe(select(itemsSelector));

  public working$: Observable<boolean> = this.store.pipe(
    select(workingSelector)
  );

  constructor(protected store: Store<any>) {}

  public fetchSearchProducts(query: string): void {
    this.store.dispatch(fetchSearchProducts({ query }));
  }
}

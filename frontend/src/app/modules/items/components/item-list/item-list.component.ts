import { filter, tap } from 'rxjs/operators';
import { ItemsI } from './../../entities/items.entity';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsFacade } from './../../items.facade';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
})
export class ItemListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private facade: ItemsFacade) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        tap(() => this.facade.itemsClearStore()),
        filter(({ search }) => !!search)
      )
      .subscribe(({ search }) => this.facade.fetchSearchProducts(search));
  }

  get items$(): Observable<ItemsI[]> {
    return this.facade.items$;
  }

  get working$(): Observable<boolean> {
    return this.facade.working$;
  }
}

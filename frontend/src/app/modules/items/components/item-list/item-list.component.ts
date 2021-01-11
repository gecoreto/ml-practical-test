import { filter, tap } from 'rxjs/operators';
import { ItemsI } from './../../entities/items.entity';
import { Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsFacade } from './../../items.facade';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private facade: ItemsFacade,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        tap(() => this.facade.itemsClearStore()),
        filter(({ search }) => !!search)
      )
      .subscribe(({ search }) => this.facade.fetchSearchProducts(search));
    //
    this.facade.categories$
      .subscribe(([item]) => {
        // Para ñadir el título de la página
        this.title.setTitle(item);
        // Añadir el tag de la info de la página
        this.meta.addTag({
          name: 'description',
          content:
            'Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.',
        });
      })
      .unsubscribe();
  }

  ngOnDestroy(): void {
    // Quitar el tag "description" antes de ir a otra página, para que rastree correctamente la información
    this.meta.removeTag(`name=\'description\'`);
  }

  get items$(): Observable<ItemsI[]> {
    return this.facade.items$;
  }

  get working$(): Observable<boolean> {
    return this.facade.working$;
  }
}

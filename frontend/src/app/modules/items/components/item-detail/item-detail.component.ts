import { filter } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsI } from '../../entities/items.entity';
import { ItemsFacade } from './../../items.facade';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass'],
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private facade: ItemsFacade,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.facade.fetchProductDetail(this.route.snapshot.params.id);
    this.product$.pipe(filter((item) => !!item)).subscribe((item) => {
      // Para ñadir el título de la página
      this.title.setTitle(item.title);
      // Añadir el tag de la info de la página
      this.meta.addTag({
        name: 'description',
        content: item.description,
      });
    });
  }

  ngOnDestroy(): void {
    // Quitar el tag "description" antes de ir a otra página, para que rastree correctamente la información
    this.meta.removeTag(`name=\'description\'`);
  }

  get product$(): Observable<ItemsI> {
    return this.facade.product$;
  }

  get working$(): Observable<boolean> {
    return this.facade.working$;
  }
}

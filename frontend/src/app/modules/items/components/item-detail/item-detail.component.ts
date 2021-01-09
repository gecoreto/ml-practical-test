import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsI } from '../../entities/items.entity';
import { ItemsFacade } from './../../items.facade';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass'],
})
export class ItemDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private facade: ItemsFacade) {}

  ngOnInit(): void {
    this.facade.fetchProductDetail(this.route.snapshot.params.id);
  }

  get product$(): Observable<ItemsI> {
    return this.facade.product$;
  }

  get working$(): Observable<boolean> {
    return this.facade.working$;
  }
}

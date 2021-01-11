import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsFacade } from './items.facade';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass'],
})
export class ItemsComponent implements OnInit {
  constructor(private facade: ItemsFacade) {}

  ngOnInit(): void {}

  get categories$(): Observable<string[]> {
    return this.facade.categories$;
  }
}

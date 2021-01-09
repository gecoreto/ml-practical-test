import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { ItemsFacadeMock } from 'test-helpers/mocks/facade/items.facade.mock';
import { ItemsFacade } from '../../items.facade';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: from([{ search: 'iphone' }]),
          },
        },
        {
          provide: ItemsFacade,
          useClass: ItemsFacadeMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

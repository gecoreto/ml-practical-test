import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsFacadeMock } from 'test-helpers/mocks/facade/items.facade.mock';
import { ItemsComponent } from './items.component';
import { ItemsFacade } from './items.facade';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsComponent],
      providers: [
        {
          provide: ItemsFacade,
          useClass: ItemsFacadeMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

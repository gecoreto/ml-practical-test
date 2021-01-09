import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  const setup = (): {
    service: ItemsService;
    httpTestingController: HttpTestingController;
  } => {
    const service = TestBed.inject(ItemsService);
    const httpTestingController = TestBed.inject(HttpTestingController);
    return { service, httpTestingController };
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ItemsService],
      }).compileComponents();
    })
  );

  it('should be created', () => {
    const service: ItemsService = TestBed.inject(ItemsService);
    expect(service).toBeTruthy();
  });
});

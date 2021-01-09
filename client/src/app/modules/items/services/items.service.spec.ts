import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ItemsService } from './items.service';
import { environment as ENV } from './../../../../environments/environment';

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

  it('should to call fetchCost', () => {
    // const { service, httpTestingController } = setup();
    // const url = ENV.api.searchProducts;
    // const mockData: any = {
    //   name: 'Iphone'
    // };
    // service.fetchSearchProducts('iphone').subscribe((resp) => {
    //   expect(mockData).toEqual(mockData);
    // });
    // const req = httpTestingController.expectOne(url);
    // req.flush(mockData);
    // expect(req.request.method).toBe('GET');
  });
});

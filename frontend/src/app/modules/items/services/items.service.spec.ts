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

  it('should to call fetchSearchProducts', () => {
    const { service, httpTestingController } = setup();
    const query = 'iphone';
    const url = ENV.api.server_url + `?q=${query}`;
    const mockData: any = {
      author: { name: 'David Javier', lastname: 'Garzon' },
      items: [
        {
          id: 'MLA898581193',
          title: 'Departamento 3 Ambientes Con Balcón Y Parrilla - San Isidro',
          price: { currency: 'USD', amount: 310000, decimals: null },
          picture:
            'https://http2.mlstatic.com/D_839951-MLA43459209939_092020-O.jpg',
          condition: 'Usado',
          free_shipping: false,
          city_name: null,
          hello: 'moto',
          sold_quantity: 0,
          description:
            'Departamenteo dentro del complejo San Isidro Central.\r\nImpecable estado, paredes pintadas recientemente, listo para mudarse.\r\n\r\n3 Ambientes:\r\n2 cuartos (1 con baño en suite)\r\n2 Baños\r\nLiving Comedor\r\nCocina Integrada con barra.\r\nBalcon con parrilla.\r\n\r\n-Cochera subterránea + Baulera\r\n\r\n-Dimensiones: 75,63 cubiertos + 7,69 Semicubiertos\r\nTotal Metros: 83,32\r\n\r\n-Amenities:\r\nSeguridad 24Hs (2 personales de seguridad permanentes)\r\nPileta\r\nLaundry\r\nGimnasio\r\nSala de reuniones\r\nGuarderia infantil\r\nSUM\r\nCocheras de cortesía',
        },
      ],
    };
    service.fetchSearchProducts(query).subscribe((resp) => {
      expect(mockData).toEqual(mockData);
    });
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should to call fetchProductDetail', () => {
    const { service, httpTestingController } = setup();
    const id = 'MLA898581193';
    const url = ENV.api.server_url + `/${id}`;
    const mockData: any = {
      author: { name: 'David Javier', lastname: 'Garzon' },
      item: {
        id: 'MLA898581193',
        title: 'Departamento 3 Ambientes Con Balcón Y Parrilla - San Isidro',
        price: { currency: 'USD', amount: 310000, decimals: null },
        picture:
          'https://http2.mlstatic.com/D_839951-MLA43459209939_092020-O.jpg',
        condition: 'Usado',
        free_shipping: false,
        city_name: null,
        hello: 'moto',
        sold_quantity: 0,
        description:
          'Departamenteo dentro del complejo San Isidro Central.\r\nImpecable estado, paredes pintadas recientemente, listo para mudarse.\r\n\r\n3 Ambientes:\r\n2 cuartos (1 con baño en suite)\r\n2 Baños\r\nLiving Comedor\r\nCocina Integrada con barra.\r\nBalcon con parrilla.\r\n\r\n-Cochera subterránea + Baulera\r\n\r\n-Dimensiones: 75,63 cubiertos + 7,69 Semicubiertos\r\nTotal Metros: 83,32\r\n\r\n-Amenities:\r\nSeguridad 24Hs (2 personales de seguridad permanentes)\r\nPileta\r\nLaundry\r\nGimnasio\r\nSala de reuniones\r\nGuarderia infantil\r\nSUM\r\nCocheras de cortesía',
      },
    };
    service.fetchProductDetail(id).subscribe((resp) => {
      expect(mockData).toEqual(mockData);
    });
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });
});

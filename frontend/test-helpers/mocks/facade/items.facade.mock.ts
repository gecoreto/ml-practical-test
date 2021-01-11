import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemsI } from 'src/app/modules/items/entities/items.entity';

@Injectable()
export class ItemsFacadeMock {
  public items$: Observable<ItemsI[]> = new BehaviorSubject([]);
  public product$: Observable<ItemsI> = new BehaviorSubject({
    id: 'MLA898581193',
    title: 'Departamento 3 Ambientes Con Balcón Y Parrilla - San Isidro',
    price: { currency: 'USD', amount: 310000, decimals: null },
    picture: 'https://http2.mlstatic.com/D_839951-MLA43459209939_092020-O.jpg',
    condition: 'Usado',
    free_shipping: false,
    city_name: null,
    hello: 'moto',
    sold_quantity: 0,
    description:
      'Departamenteo dentro del complejo San Isidro Central.\r\nImpecable estado, paredes pintadas recientemente, listo para mudarse.\r\n\r\n3 Ambientes:\r\n2 cuartos (1 con baño en suite)\r\n2 Baños\r\nLiving Comedor\r\nCocina Integrada con barra.\r\nBalcon con parrilla.\r\n\r\n-Cochera subterránea + Baulera\r\n\r\n-Dimensiones: 75,63 cubiertos + 7,69 Semicubiertos\r\nTotal Metros: 83,32\r\n\r\n-Amenities:\r\nSeguridad 24Hs (2 personales de seguridad permanentes)\r\nPileta\r\nLaundry\r\nGimnasio\r\nSala de reuniones\r\nGuarderia infantil\r\nSUM\r\nCocheras de cortesía',
  });
  public categories$: Observable<string[]> = new BehaviorSubject([]);

  public working$: Observable<boolean> = new BehaviorSubject(false);

  public fetchSearchProducts(query: string): void {}

  public fetchProductDetail(id: string): void {}

  public itemsClearStore(): void {}
}

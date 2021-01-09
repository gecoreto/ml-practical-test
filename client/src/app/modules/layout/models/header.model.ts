import { Injectable } from '@angular/core';
import { ApplicationModel } from '@app/app.model';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderModel extends ApplicationModel {
  public title$: Observable<string> = this.store.pipe(
    select((store) => store.ui.header.title)
  );
  public back$: Observable<string> = this.store.pipe(
    select((store) => store.ui.header.back)
  );
  public showProducts$: Observable<boolean> = this.store.pipe(
    select((store) => store.ui.header.showProducts)
  );
  public showPromotionsSlider$: Observable<boolean> = this.store.pipe(
    select((store) => store.ui.header.showPromotionsSlider)
  );
  public showBorderInHeader$: Observable<boolean> = this.store.pipe(
    select((store) => store.ui.header.showBorderInHeader)
  );
}

import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApplicationModel } from '@app/app.model';
import { ApplicationState } from '@store/state/application.state';

@Injectable()
export class LoadingModel extends ApplicationModel {
  public loading$: Observable<boolean> = this.store.pipe(
    select((store: ApplicationState) => store.ui.loading)
  );
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { HeaderModel } from '@app/modules/layout/models/header.model';
import { ShowBorderInHeaderAction } from './../../../store/state/ui/header/header.action';

@Injectable()
export class ShowBorderHeaderGuard implements CanActivate {
  constructor(private model: HeaderModel) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      state.url === '/' ||
      state.url.includes('/detalle-producto') ||
      state.url.includes('/pagos') ||
      state.url.includes('/productos-aval') ||
      state.url.includes('/giros-retiros')
    ) {
      this.model.dispatch(new ShowBorderInHeaderAction(false));
    } else {
      this.model.dispatch(new ShowBorderInHeaderAction(true));
    }
    return true;
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ItemsService } from './../services/items.service';
import * as actions from './items.actions';

@Injectable()
export class ItemsEffect {
  constructor(private actions$: Actions, private service: ItemsService) {}

  fetchSearchProductsEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchSearchProducts),
      switchMap((action) =>
        this.service.fetchSearchProducts(action.query).pipe(
          map((items) => actions.fetchSearchProductsSuccess({ items })),
          catchError((error: HttpErrorResponse) =>
            of(
              actions.fetchSearchProductsError({
                msg: error.message.toString(),
              })
            )
          )
        )
      )
    )
  );

  fetchDetailProductEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchProductDetail),
      switchMap((action) =>
        this.service.fetchProductDetail(action.id).pipe(
          map((product) => actions.fetchProductDetailSuccess({ product })),
          catchError((error: HttpErrorResponse) =>
            of(
              actions.fetchProductDetailError({
                msg: error.message.toString(),
              })
            )
          )
        )
      )
    )
  );
}

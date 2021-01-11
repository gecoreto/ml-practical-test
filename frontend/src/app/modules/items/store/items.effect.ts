import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ItemsService } from './../services/items.service';
import * as actions from './items.actions';

@Injectable()
export class ItemsEffect {
  constructor(
    private actions$: Actions,
    private service: ItemsService,
    private router: Router
  ) {}

  fetchSearchProductsEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchSearchProducts),
      switchMap((action) =>
        this.service.fetchSearchProducts(action.query).pipe(
          map(({ items, categories }) =>
            actions.fetchSearchProductsSuccess({ items, categories })
          ),
          catchError((error: HttpErrorResponse) => {
            console.log('Error fetchSearchProductsEffect', error);
            this.router.navigate(['error']);
            return of(
              actions.fetchSearchProductsError({
                msg: error.message.toString(),
              })
            );
          })
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
          catchError((error: HttpErrorResponse) => {
            console.log('Error fetchDetailProductEffect', error);
            this.router.navigate(['error']);
            return of(
              actions.fetchProductDetailError({
                msg: error.message.toString(),
              })
            );
          })
        )
      )
    )
  );
}

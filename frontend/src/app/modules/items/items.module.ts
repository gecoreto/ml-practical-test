import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemsFacade } from './items.facade';
import { ItemsService } from './services/items.service';
import { ItemsEffect } from './store/items.effect';
import { itemsReducer } from './store/items.reducer';
import { itemsFeatureName, ItemsState } from './store/items.state';

export const FEATURE_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<ItemsState>
>('Items Module State');

@NgModule({
  declarations: [ItemsComponent, ItemListComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    StoreModule.forFeature(itemsFeatureName, FEATURE_REDUCER_TOKEN),
    EffectsModule.forFeature([ItemsEffect]),
  ],
  providers: [
    ItemsFacade,
    ItemsService,
    {
      provide: FEATURE_REDUCER_TOKEN,
      useValue: itemsReducer,
    },
  ],
})
export class ItemsModule {}

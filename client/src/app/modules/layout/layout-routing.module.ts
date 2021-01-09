import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'items',
            loadChildren: () =>
              import('../items/items.module').then((m) => m.ItemsModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

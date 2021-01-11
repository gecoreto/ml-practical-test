import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
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
          {
            path: 'error',
            component: ErrorComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

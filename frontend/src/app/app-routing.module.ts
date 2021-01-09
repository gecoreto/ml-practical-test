import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROOT_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROOT_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

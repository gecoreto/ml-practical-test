import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule, LayoutRoutingModule, ReactiveFormsModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}

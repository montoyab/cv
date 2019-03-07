import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeDirective } from '../home.directive';

@NgModule({
  declarations: [HomeComponent, HomeDirective],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

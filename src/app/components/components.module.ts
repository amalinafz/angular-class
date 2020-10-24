import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';

const component = [
  SliderComponent
]

@NgModule({
  declarations: component,
  imports: [
    CommonModule
  ],
  exports: component
})
export class ComponentsModule { }

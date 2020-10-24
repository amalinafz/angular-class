import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import{SecondPageComponent}  from './second-page.component';
import { ComponentsModule } from '../components/components.module';

const routes: Routes =[{
  path: '',
  component: SecondPageComponent
}];

@NgModule({
  declarations: [
    SecondPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [
    SecondPageComponent
  ]
})
export class SecondPageModule { }

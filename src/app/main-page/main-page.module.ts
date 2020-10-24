import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import{MainPageComponent}  from './main-page.component';
import { ComponentsModule } from '../components/components.module';

const routes: Routes =[{
  path: '',
  component: MainPageComponent
}];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }

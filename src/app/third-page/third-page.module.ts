import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import{ThirdPageComponent}  from './Third-page.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

const routes: Routes =[{
  path: '',
  component: ThirdPageComponent
}];

@NgModule({
  declarations: [
    ThirdPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    ThirdPageComponent
  ]
})
export class ThirdPageModule { }

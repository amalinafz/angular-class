import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./third-page/third-page.module').then(m => m.ThirdPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

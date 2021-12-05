import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';

const routes: Routes = [
  {path: 'page01', component:Page01Component},
  {path: 'page02', component:Page02Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

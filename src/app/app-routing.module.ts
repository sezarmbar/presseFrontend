import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SearchPageComponent } from './pages/index'

const routes: Routes = [
  {path:'', component:SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

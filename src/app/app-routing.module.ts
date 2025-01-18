import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Map1Component } from './map1/map1.component';
import { Map2Component } from './map2/map2.component';

const routes: Routes = [
  { path: 'map1', component: Map1Component },
  { path: 'map2', component: Map2Component },
  { path: '', redirectTo: '/map1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

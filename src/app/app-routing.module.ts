import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitulosComponent } from './capitulos/capitulos.component';

const routes: Routes = [
  {path:'capitulos', component:CapitulosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

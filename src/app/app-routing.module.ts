import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    title: "Ian Jackson"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PlatillosComponent } from './pages/platillos/platillos.component';

const routes: Routes = [
  { path: 'cat', component: CategoriasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'platillos', component: PlatillosComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

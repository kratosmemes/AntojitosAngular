import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(public ServicioComponente:CategoriasService) { }

  rows = 3
  Categorias =<any>[];

  ngOnInit(): void {
    
  }

  getCategorias(){
    console.log("Si funciona")
    this.ServicioComponente.getCategorias().
    subscribe(categ=>{
      this.Categorias=categ;
      console.log(this.Categorias)
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Categorias } from '../modelos/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(public http:HttpClient) { }



  getCategorias(){
    const url = 'http://localhost:3000/categoria';
    return this.http.get(url);
  }

  postCategoria(usr:Categorias){
    const postUrl = 'http://localhost:3000/categoria';
    return this.http.post(postUrl,usr);
  }

  deleteCategoria(_id){
    const postUrl = `http://localhost:3000/categoria/${_id}`
    return this.http.delete(postUrl);
  }
}

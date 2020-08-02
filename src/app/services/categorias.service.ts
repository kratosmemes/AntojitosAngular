import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(public http:HttpClient) { }

  getCategorias(){
    const url = 'http://localhost:3000/categoria';
    return this.http.get(url);
  }

  postCategoria(){
    
  }
}

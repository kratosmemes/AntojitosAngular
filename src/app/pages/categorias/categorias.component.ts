import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { FormGroup , FormControl , FormBuilder , Validators} from '@angular/forms';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(public ServicioComponente:CategoriasService , private FormBuilder: FormBuilder) {
    this.buildForm();
   }

  form:FormGroup

  private buildForm() {
    this.form = this.FormBuilder.group({
      strNombre:['', [Validators.required]],
      strDescripcion: ['', [Validators.required]],
    });

    //this.form.valueChanges
    //.subscribe(value => {
    //  console.log(value);
    //});
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

  Categorias =<any>[];
  
  activo:boolean
  getCategorias(){
    console.log("Si funciona")
    this.ServicioComponente.getCategorias().
    subscribe(categ=>{
      this.Categorias=categ;
      console.log(this.Categorias);
    })
  }

  postCategorias(data){
    event.preventDefault();
    this.ServicioComponente.postCategoria(this.form.value).
    subscribe(res=>{
      console.log(res);
    })
    this.ngOnInit();
  }
  
  deleteCategoria(_id){
    this.ServicioComponente.deleteCategoria(_id)
    .subscribe(res=>{
      console.log(res);
    })
  }
}

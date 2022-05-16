import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Response } from '../models/response';
import { ApiproductoService } from '../services/apiproducto.service';
import { Producto } from '../models/producto';
import { DialogproductoComponent } from './dialog/dialogproducto.component';
import { DialogdeleteComponent } from '../common/delete/dialogdelete.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
   
  public lst: any[]=[];
  public columnas:  string[]=['id','nombre','precioUnitario','costo','actions']
readonly width: string='300px'

  constructor(
    private apiProducto:ApiproductoService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.apiProducto.getProductos().subscribe(response =>{
      this.lst = response.data;
    });

  }

openAdd(){

  const dialogRef = this.dialog.open(DialogproductoComponent,{
    width:this.width
    
  });

  dialogRef.afterClosed().subscribe(result =>{
    this.getProductos();
    
  });
}



openEdit(producto : Producto){
  const dialogRef = this.dialog.open(DialogproductoComponent, {
    width:'300',
    data: producto
  });

  dialogRef.afterClosed().subscribe(result =>{
    this.getProductos();
  })

}


/*Eliminar-*/
delete(producto: Producto){
  const dialogRef= this.dialog.open(DialogdeleteComponent, {
    width:'300'
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.apiProducto.delete(producto.id).subscribe ( response => {
        if(response.exito===1) {
          this.snackBar.open('Producto eliminado', '',{
            duration:2000
          });
          this.getProductos();
        }
      });
    }
  });


}  




}

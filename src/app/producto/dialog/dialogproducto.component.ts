import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/models/producto';
import { ApiproductoService } from 'src/app/services/apiproducto.service';

@Component({
  selector: 'app-dialogproducto',
  templateUrl: './dialogproducto.component.html',
  styleUrls: ['./dialogproducto.component.scss']
})
export class DialogproductoComponent implements OnInit {

  public nombre! :string;
  public precioUnitario!: number;
  public costo!:number;


  constructor(

    public dialogRef: MatDialogRef<DialogproductoComponent>,
    public apiProducto:ApiproductoService,
    public snackBar: MatSnackBar,
    
    @Inject(MAT_DIALOG_DATA) public producto: Producto) { 
      if(this.producto!==null)
      {
        this.nombre=producto.nombre;
        this.precioUnitario=producto.precioUnitario;
        this.costo=producto.costo;
      }
    }



    close() {
      this.dialogRef.close();
    }


  ngOnInit(): void {
  }



addProducto(){
  const producto: Producto ={nombre: this.nombre, precioUnitario: this.precioUnitario, costo: this.costo,id:0};

  this.apiProducto.add(producto).subscribe (response =>{
    if(response.exito===1)
    {
      this.dialogRef.close();
      this.snackBar.open('Producto Insertado','',{
        duration:2000
      });
    }
  });

}


editProducto(){
  const producto: Producto ={nombre: this.nombre, precioUnitario: this.precioUnitario, costo: this.costo, id:this.producto.id};
 
      this.apiProducto.edit(producto).subscribe(response=> {
        if(response.exito===1){
          this.dialogRef.close();
          this.snackBar.open('Datos editados','',{
            duration:2000
          });
        }
      });

}


}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from 'src/app/services/apicliente.service';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogcliente.component.html',
  styleUrls: ['./dialogcliente.component.scss']
})
export class DialogclienteComponent implements OnInit {

  public nombre!: string;

  constructor(
    
    public dialogRef: MatDialogRef<DialogclienteComponent>,
    public apiCliente: ApiclienteService,
    public snackBar: MatSnackBar,
    /* MAT_DIALOG_DATA  constante */
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente) { 
    if(this.cliente !==null){
      this.nombre=cliente.nombre;
    }
  }

  close() {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }


  addCliente(){
    const cliente: Cliente ={ nombre:this.nombre, id:0};
    this.apiCliente.add(cliente).subscribe(response=> {
      if(response.exito===1){
        this.dialogRef.close();
        this.snackBar.open('Datos insertados','',{
          duration:2000
        });
      }
    });
  }

  


  editCliente(){
    const cliente: Cliente ={nombre: this.nombre, id:this.cliente.id};
   
        this.apiCliente.edit(cliente).subscribe(response=> {
          if(response.exito===1){
            this.dialogRef.close();
            this.snackBar.open('Datos editados','',{
              duration:2000
            });
          }
        });
  
  }
  

}

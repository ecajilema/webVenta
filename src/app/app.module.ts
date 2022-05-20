import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { DialogclienteComponent } from './cliente/dialog//dialogcliente.component';
import { DialogdeleteComponent } from './common/delete/dialogdelete.component';
import { DialogproductoComponent } from './producto/dialog/dialogproducto.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './security/jwt.interceptor';
import { VentaComponent } from './venta/venta.component';




@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeComponent,
    ProductoComponent,
    DialogclienteComponent,
    DialogdeleteComponent,
    DialogproductoComponent,
    LoginComponent,
    VentaComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule, 
    MatDialogModule,
    MatButtonModule,
    MatInputModule, 
    MatSnackBarModule,
    FormsModule, 
    MatCardModule,
    ReactiveFormsModule
    
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

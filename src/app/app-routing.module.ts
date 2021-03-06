import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProductoComponent } from './producto/producto.component';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [

    /*Para rederigir a Home*/
    { path:'', redirectTo:'/home',pathMatch:'full'},

    { path:'home',component : HomeComponent , canActivate:[AuthGuard]},
    { path: 'cliente', component: ClienteComponent, canActivate:[AuthGuard]},
    { path: 'producto', component: ProductoComponent, canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

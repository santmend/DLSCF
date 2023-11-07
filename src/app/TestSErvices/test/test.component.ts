import { Component } from '@angular/core';
import { InvoceService } from 'src/app/Services/Invoce.service';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';
import { Invoce } from 'src/app/modelos/Invoce';
import { Product } from 'src/app/modelos/Product';
import { User } from 'src/app/modelos/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private adminService: AdminService, private invoceService: InvoceService, private userService : UserService, private productService: ProductService,
    private rout : Router) {

  }
  listar() {
    this.adminService.listForRol("cliente").subscribe(
      {
        next: (data) => {
          console.log("listar da: ", data)
        }, error: (e) => {
          console.log("Error: ", e)
        }
      }

    )
  }
  nuevoRol() {
    this.adminService.updateRol(3, "cliente").subscribe({
      next: (data) => {
        console.log("Respuesat: ", data)
      }, error: (e) => {
        console.log("Error: ", e)
      }
    })
  }
  deleteUser() {
    this.adminService.deleteUser(2).subscribe({
      next: (data) => {
        console.log("Respuesta: ", data)
      }, error: (e) => {
        console.log("Error: ", e)
      }
    })
  }
  addInvoce() {
    const model: Invoce = {
      correo: "nico.rodriguez.torres.71@gmail.com",
      idFactura: 1,
      idProducto: 5,
      nombreProducto: "compraPrueba",
      idUsuario: 3,
      precio: 2000

    }
    this.invoceService.addInvoce(model).subscribe({
      next: (data) => {
        console.log("Add: ", data)
      }, error: (e) => {
        console.log("Error: ", e)
      }
    })
  }
  registerUser(){
    const model : User = {
      correo: "nicolas@gmail.com",
      idUsuario : "",
      nombre: "nicolas",
      password: "1234",
      rol: "1",
      telefono: "1234567"
    }
    this.userService.register(model).subscribe({
      next:(data) => {
        console.log("Data: ",data)
      },error:(e) => {
        console.log("Error: ",e)
      }
    })
  }
   addProuct(){
    const model : Product = {
      idCategoria: "3",
      idProducto: "",
      nombre: "PruebaProduct",
      precio:"2000"

    }
    this.productService.addProduct(model).subscribe({
      next:(data) => {
        console.log("Prodruct: ",data)
      },error:(e) =>{
        console.log("Error: ", e)
      }
    })
   }
   getListProduct(){
    this.productService.getProducts().subscribe({
      next:(data) =>{
        console.log(data)
      },error:(e) => {
        console.log("Error: ",e)
      }
    })
   }
   deleteProdruct(){
    this.productService.deleteProdruct(16).subscribe({
      next:(data) =>{
         console.log("Data: ", data)
      },error:(e) =>{
        console.log("Error: ",e)
      }
    })
   }
   refresh(){
    localStorage.removeItem("Token")
    this.rout.navigate(['login'])
   }
}

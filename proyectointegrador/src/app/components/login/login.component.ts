import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = false
  usuario: any
  valido = true
  constructor() { 
  }

  onBlurMethod(){
    /*if(valor == condicion) {
      valido = true
    }else{
      valido = false
    }*/
    console.log(this.usuario)
    // Si La validacion da mal valido = falso
    // Si esta bien valido = true
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  modoOscuro: boolean=false;
  value: string = '';
  password: string = '';
  texto: string = '';
  botonModoOscuro(): void{
  const html= document.querySelector('html');
  html?.classList.toggle('modo-oscuro', this.modoOscuro);
}


}


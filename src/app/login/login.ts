import { Component, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../theme';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  @Output() irASignup = new EventEmitter<void>();
  modoOscuro: boolean=false;
  value: string = '';
  password: string = '';
  texto: string = '';

  constructor(private themeService: ThemeService) {
    this.modoOscuro = this.themeService.getModoOscuro();
  }

  botonModoOscuro(): void {
    this.themeService.setModoOscuro(this.modoOscuro);
  }

  irARegistro(): void {
    this.irASignup.emit();
  }
}


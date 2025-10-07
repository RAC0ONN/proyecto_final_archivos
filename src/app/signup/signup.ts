import { Component, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../theme';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  @Output() irALogin = new EventEmitter<void>();

  modoOscuro: boolean = false;

  constructor(private themeService: ThemeService) {
    this.modoOscuro = this.themeService.getModoOscuro();
  }

  ngOnInit() {
    this.themeService.modoOscuro$.subscribe(valor => {
      this.modoOscuro = valor;
    });
  }

  volverALogin(): void {
    this.irALogin.emit();
  }

}

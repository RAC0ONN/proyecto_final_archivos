import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private modoOscuroSubject = new BehaviorSubject<boolean>(false);
  modoOscuro$ = this.modoOscuroSubject.asObservable();

  setModoOscuro(valor: boolean) {
    this.modoOscuroSubject.next(valor);
    const html = document.querySelector('html');
    html?.classList.toggle('modo-oscuro', valor);
  }

  getModoOscuro(): boolean {
    return this.modoOscuroSubject.getValue();
  }
}

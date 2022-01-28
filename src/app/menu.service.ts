import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu = new Subject<boolean>();
  menuMessage$ = this.menu.asObservable();

  constructor(
  ) { }

  menuMessage(b:boolean) {
    this.menu.next(b)
  }
}

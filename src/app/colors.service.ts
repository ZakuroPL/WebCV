import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Color } from './models/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private colors = new Subject<Color>();
  colorsMessage$ = this.colors.asObservable();

  constructor(
  ) { }

  colorsMessage(c:Color) {
    this.colors.next(c)
  }
}

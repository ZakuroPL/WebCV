import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColorsService } from './colors.service';
import { MenuService } from './menu.service';
import { Color } from './models/colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  backgroundColor:Color;
  hamburgerColor:string;
  isMenuOpened:boolean = false;

  constructor(
    private colorService: ColorsService,
    private menuService: MenuService,
  ){
    this.colorService.colorsMessage$.subscribe(
      (data:Color) => {
        this.backgroundColor = data
        this.hamburgerColor = data + "-hamburgerX"
    })
    this.menuService.menuMessage$.subscribe(
      (data:boolean) => {
        this.isMenuOpened = data
        window.window.scrollTo(0, 0)
    })
  }
  ngOnInit(): void {
  }
  closeNav(){
    if(this.isMenuOpened) this.menuService.menuMessage(false)
  }
  inputClick(){
    this.isMenuOpened = !this.isMenuOpened
  }
}

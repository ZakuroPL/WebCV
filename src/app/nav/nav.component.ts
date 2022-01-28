import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ColorsService } from '../colors.service';
import { Color } from '../models/colors';
import {filter} from 'rxjs/operators';
import { ApiService } from '../api.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  color = Color;
  navColor:Color;
  constructor(
    private router:Router,
    private colorsService: ColorsService,
    private apiService: ApiService,
    private menuService: MenuService
    ) {
      router.events.subscribe( event => {
        if(event instanceof NavigationEnd) this.colorsOnInit(event.url);
      })
    }

  ngOnInit(): void {
    this.linkClick(Color.blue, "");
    this.apiService.getList().subscribe();
  }
  colorsOnInit(url:string){
    if(url == "/about-me") this.linkClick(Color.blue, url)
    else if(url == "/skills") this.linkClick(Color.green, url)
    else if(url == "/portfolio") this.linkClick(Color.orange, url)
    else if(url == "/contact") this.linkClick(Color.purple, url)
  }
  linkClick(c:Color,l:string){
    this.navColor = c;
    this.colorsService.colorsMessage(c);
    this.menuService.menuMessage(false);
    if(l)this.router.navigate([l]);
  }
}

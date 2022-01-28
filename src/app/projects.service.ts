import { Injectable } from '@angular/core';
import { Project, ProjectType } from './models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects:Project[] = [
    {
      name: "RentalCars",
      picture: "rental.PNG",
      description: "FullStack project with Angular and back-end with Django. Web application to check which cars are available in some date and next to rent by registration in system.",
      live: "http://rentalcars.zakuro.pl/",
      gitHub: "https://github.com/ZakuroPL/rentalcars",
      type: ProjectType.full
    },
    {
      name: "WorkerExpert",
      picture: "workerExpert.PNG",
      description: "Angular project with back-end in Django. Printing to do list for workers in store. LOGIN: \"test\" / PASSWORD: \"test1111\"",
      live: "http://test1.zakuro.pl/",
      gitHub: "https://github.com/ZakuroPL/workerExpert",
      type: ProjectType.full
    },
    {
      name: "AirZakuro",
      picture: "airZakuro.PNG",
      description: "Angular templete with ngx-translate and lazy-loading.",
      live: "http://airzakuro.zakuro.pl/",
      gitHub: "https://github.com/ZakuroPL/airzakuro",
      type: ProjectType.front
    },
    {
      name: "Portfolio",
      picture: "webCV.PNG",
      description: "Angular project with RxJS and SASS (@use, @mixin(), @include, @extend",
      live: "",
      gitHub: "https://github.com/ZakuroPL/webcv",
      type: ProjectType.front
    },
    {
      name: "EasyWarehouse",
      picture: "easyWarehouse.PNG",
      description: "Angular project with AuthGuard, RxJS and back-end with Django. It's logistics program for product management in stock with login system.",
      live: "http://easy-warehouse.zakuro.pl/",
      gitHub: "https://github.com/ZakuroPL/easy-warehouse",
      type: ProjectType.full
    },
    {
      name: "BackEnd in Heroku",
      picture: "server.jpg",
      description: "BackEnd in Django for EasyWarehouse and RentalCars.",
      live: "",
      gitHub: "https://github.com/ZakuroPL/back-end-django",
      type: ProjectType.back
    },
    {
      name: "Sapper War 2D",
      picture: "sapper.PNG",
      description: "My android game with Unity and C#. It's my one of four games which I made and one of my first programming project. I used AdMob.",
      live: "https://play.google.com/store/apps/details?id=com.Czamarka.SapperWar2DMinefield",
      gitHub: "https://github.com/ZakuroPL/sapper_unity",
      type: ProjectType.game
    },
  ]

  constructor() { }

}

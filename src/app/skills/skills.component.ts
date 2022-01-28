import { Component, OnInit } from '@angular/core';
import { Color } from '../models/colors';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  techonologies: {name:string,picture:string,color:Color, category:string}[] = [
    {
      name: "TypeScript",
      picture: "typescript",
      color: Color.blue,
      category: "M",
    },
    {
      name: "Angular",
      picture: "angular",
      color: Color.orange,
      category: "M",
    },
    {
      name: "JavaScript",
      picture: "javascript",
      color: Color.blue,
      category: "M",
    },
    {
      name: "HTML",
      picture: "html",
      color: Color.blue,
      category: "M",
    },
    {
      name: "CSS",
      picture: "css",
      color: Color.blue,
      category: "M",
    },
    {
      name: "Sass",
      picture: "sass",
      color: Color.blue,
      category: "M",
    },
    {
      name: "RxJS",
      picture: "rxjs",
      color: Color.orange,
      category: "M",
    },
    {
      name: "Visual Studio",
      picture: "vs",
      color: Color.purple,
      category: "M",
    },
    {
      name: "Git",
      picture: "git",
      color: Color.purple,
      category: "M",
    },
    {
      name: "GitHub",
      picture: "github",
      color: Color.purple,
      category: "M",
    },
    {
      name: "Python",
      picture: "python",
      color: Color.blue,
      category: "A",
    },
    {
      name: "Django",
      picture: "django",
      color: Color.orange,
      category: "A",
    },
    {
      name: "PyCharm",
      picture: "pycharm",
      color: Color.purple,
      category: "A",
    },
    {
      name: "C#",
      picture: "c-sharp",
      color: Color.blue,
      category: "A",
    },
    {
      name: "Unity",
      picture: "unity",
      color: Color.orange,
      category: "A",
    },
    {
      name: "Postman",
      picture: "postman",
      color: Color.purple,
      category: "A",
    },
    {
      name: "Bootstrap",
      picture: "bootstrap",
      color: Color.orange,
      category: "A",
    },
    {
      name: "Heroku",
      picture: "heroku",
      color: Color.purple,
      category: "A",
    },

  ];
  skills:Array<string> = [
    "create responsive web application",
    "create API service for communicate with BackEnd (GET,POST,...)",
    "use ngx-translate",
    "create routes with lazy-loading",
    "use observable with RxJS",
    "create own pipes, models, enums",
    "save data in cookies or local storage",
    "and more",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

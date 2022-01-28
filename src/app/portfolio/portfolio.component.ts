import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {


  myProjects:Project[];
  constructor(
    private projects: ProjectsService
  ) { }

  ngOnInit(): void {
    this.myProjects = this.projects.projects;
  }

}

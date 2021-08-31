import { Component, OnInit } from '@angular/core';

interface Project {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor() {}

  ngOnInit(): void {
    this.projects = [
      {
        name: 'TSG',
        image: 'https://i.imgur.com/6aPZlyI.jpg',
        description:
          'Project for a university subject, the project consists of consuming a video game API to display different titles along with relevant information, the added value of this application is that the user has the ability to save games and record hours spent on it, generating graphs and reports periodically.',
      },
      {
        name: 'Portfolio',
        image: 'https://i.imgur.com/6aPZlyI.jpg',
        description:
          'The present portfolio, made to show my career,professional experience and a little about me',
      },
      {
        name: 'UX/UI library',
        image: 'https://i.imgur.com/6aPZlyI.jpg',
        description:
          'In my current job I develop an internal library of reusable and scalable components for the mobile frontend.',
      },
      {
        name: 'GAMASI CRM',
        image: 'https://i.imgur.com/6aPZlyI.jpg',
        description:
          'I developed modules for a real estate CRM, which include customer management and current status of the properties, as well as the generation of contracts and rendering of information with pagination.',
      },
    ];
  }
}

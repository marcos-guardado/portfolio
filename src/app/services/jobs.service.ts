import { Injectable } from '@angular/core';

interface Job {
  startDate: Date;
  endDate?: Date;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs: Array<Job> = [];

  constructor() {
    this.jobs = [
      {
        startDate: new Date('9-13-2020'),
        endDate: new Date('3-30-2021'),
        title: 'Creatto Web',
        description:
          'Developed of new module for new client management to real state CRM, made it with PHP for backend, HTML, CSS and JS with jQuery for Front-End',
      },
      {
        startDate: new Date('1-15-2021'),
        endDate: new Date('3-24-2021'),
        title: "The Gamer's Stash",
        description:
          'Project made for university, made with React JS for front, the project consisted on offer help to the gamers for administrate their time inverted on play, generate reports and give them healthy advices',
      },
      {
        startDate: new Date('4-1-2021'),
        title: 'Rolsoft',
        description:
          "Developed reusable components related to the project's Front-End library, reducing the UI component's implementation time.",
      },
    ];
  }

  getJobs() {
    return this.jobs;
  }
}

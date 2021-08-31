import { Injectable } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  description: string;
  color?: string;
  level: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  frontSkills: Array<Skill> = [
    {
      name: 'html',
      logo: 'lni lni-html5',
      color: '#F4470B',
      level: 'confident',
      description:
        "I've made many designs from scratch with HTML 5, getting impressive skeletons to design beautiful and useful projects.",
    },
    {
      name: 'css',
      logo: 'lni lni-css3',
      color: '#3595CF',
      level: 'confident',
      description:
        "I've experience creating and implementing designs from scratch or from mockups with CSS3.",
    },
    {
      name: 'javascript',
      logo: 'lni lni-javascript',
      color: '#EFD81D',
      level: 'confident',
      description:
        "I've implemented functionalities to projects with Javascript vanilla, working under ECMA6 and the latest standards, using good practices, maintainable and clean code.",
    },
    {
      name: 'reactjs',
      logo: 'lni lni-react',
      color: '#60D9F7',
      level: 'enough',
      description:
        'Working with React JS I have been able to create projects with high scalability, with different functionalities that without the help of this library would take longer to implement. ',
    },
    {
      name: 'angular',
      logo: 'lni lni-angular',
      color: '#C3002F',
      level: 'beginner',
      description:
        "I've been learning this framework to could implement in many projects getting many functionalities, being my portfolio my fist project under this technology.",
    },
  ];
  backendSkills: Array<Skill> = [
    {
      name: 'php',
      logo: 'lni lni-php',
      color: '#858EB8',
      level: 'beginner',
      description:
        'Working with PHP I made several modules for a real estate CRM, working hand in hand with MySQL as database, creating dynamic requests, rendering data for the client with JQuery, as well as managing global states for the CRM.',
    },
    {
      name: 'MySQl',
      logo: 'lni lni-database',
      color: '#00618A',
      level: 'beginner',
      description: '',
    },
    {
      name: 'Node JS',
      logo: 'lni lni-nodejs',
      color: '#509941',
      level: 'beginner',
      description: '',
    },
  ];
  constructor() {}

  getFrontskills() {
    return this.frontSkills;
  }

  getBackSkills() {
    return this.backendSkills;
  }
}

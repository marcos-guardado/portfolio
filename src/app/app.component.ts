import { Component, OnInit } from '@angular/core';
import { JobsService } from './services/jobs.service';
import { SkillsService } from './services/skills.service';

interface Skill {
  name: string;
  logo: string;
  description: string;
  color?: string;
  level: string;
}

interface Job {
  startDate: Date;
  endDate?: Date;
  title: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  frontSkills: Skill[] = [];
  backSkills: Skill[] = [];
  jobs: Job[] = [];
  constructor(
    private skillsService: SkillsService,
    private jobsService: JobsService
  ) {}

  ngOnInit(): void {
    this.frontSkills = this.skillsService.getFrontskills();
    this.backSkills = this.skillsService.getBackSkills();
    this.jobs = this.jobsService.getJobs();
  }

  title = 'portfolio';
}

import { Component, OnInit, Input } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  description: string;
  color?: string;
  level: string;
}

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css'],
})
export class SkillSetComponent implements OnInit {
  @Input() title: string;
  @Input() skills: Skill[] = [];

  constructor() {
    this.title = '';
  }

  ngOnInit(): void {}
}

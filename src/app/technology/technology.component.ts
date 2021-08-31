import { Component, OnInit, Input } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  description: string;
  color?: string;
  level: string;
}

@Component({
  selector: 'app-technology',
  template: `
    <div class="card">
      <div class="icon-container" [style.background-color]="">
        <em
          (mouseover)="hovered = true"
          (mouseout)="hovered = false"
          class="{{ skill.logo }}"
          [ngClass]="hovered ? hoverClassName : ''"
          style="font-size:3rem;"
          [style.color]="skill.color"
        ></em>
      </div>
      <div class="card-body">
        <p class="card-text">{{ skill.name }}</p>
        <p class="text">
          {{ skill.level }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .icon-container-child {
        border: 1px solid;
        border-color: skill.color;
      }
      .text {
        text-align: center;
        text-transform: uppercase;
      }
      .card-text {
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
      }
      .icon-container {
        display: flex;
        justify-content: center;
      }
      .card {
        width: 15rem;
        padding: 1rem;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        justify-content: center;
      }
    `,
  ],
  // templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  @Input() hoverClassName: string = '';
  @Input() skill: Skill = {
    name: '',
    logo: '',
    color: '',
    level: '',
    description: '',
  };

  hovered: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

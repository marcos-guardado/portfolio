import { Component, OnInit, Input } from '@angular/core';

interface Project {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project = {
    name: '',
    image: '',
    description: '',
  };

  constructor() {}

  ngOnInit(): void {}
}

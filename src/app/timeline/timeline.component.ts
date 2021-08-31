import { Component, OnInit, Input } from '@angular/core';

interface Job {
  startDate?: Date;
  endDate?: Date;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  @Input() title: string = '';
  @Input() jobs: Job[] = [];
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';

interface Job {
  startDate?: Date;
  endDate?: Date;
  title: string;
  description: string;
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  @Input() jobs: Job[] = [];
  showDetails: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showDetail: boolean = false;

  switchContent() {
    //Set here all the variables
    // and the content you want to show

    this.showDetail = true;
  }
}

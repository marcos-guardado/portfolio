import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {}
}

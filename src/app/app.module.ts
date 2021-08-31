import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { TitleComponent } from './components/title/title.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TimelineComponent,
    AboutMeComponent,
    TechnologyComponent,
    ProjectsComponent,
    ProjectComponent,
    TitleComponent,
    SkillSetComponent,
    JobsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

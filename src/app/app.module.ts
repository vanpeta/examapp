import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionDetailsComponent } from './components/questions-list/question-details/question-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'questions', component: QuestionsListComponent },
  { path: 'results', component: ResultsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    QuestionsListComponent,
    QuestionDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { list } from './questions-list';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions = list.get5Questions();
  allQuestions = list.getAllQuestions();
  matches = [];

  getBadAnswers(type) {
    for (let i = 0; i < this.allQuestions.length; i++) {
      if (type === this.allQuestions[i].answer.type) {
        this.matches.push(this.allQuestions[i].answer.answer)
      }
    }
    const ret = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * this.matches.length);
      const removed = this.matches.splice(index, 1);
      ret.push(removed[0]);
    }
    return ret;
  }

  constructor() { }

  ngOnInit() {
  }

}
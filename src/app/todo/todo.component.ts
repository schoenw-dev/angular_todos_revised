import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

completeTask(t: Todo):void{
  t.completed = true;
}

allTodos: Todo[] = [
  {
    task: "Groceries",
    completed: false
  },
  {
    task: "Workout",
    completed: false
  },
  {
    task: "Laundry",
    completed: true
  },
  {
    task: "Walk Dog",
    completed: true
  },
  {
    task: "Feed Dog",
    completed: false
  }

];


}

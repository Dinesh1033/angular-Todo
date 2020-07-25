import { Component, OnInit } from '@angular/core';

import { Todo } from "../../model/Todo"
import { TodoService } from "src/app/service/todo.service";

import {v4 as a} from "uuid"
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  title:string;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    let newTodo: Todo={
      id:a(),
      title:this.title,
      isCompleted:false,
      date:new Date
      }
      this.todoService.AddTodo(newTodo);
      this.title="";

  }

}

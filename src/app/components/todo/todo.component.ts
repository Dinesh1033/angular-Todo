import { Component, OnInit } from '@angular/core';
import { TodoService } from "src/app/service/todo.service";
import { Todo } from "../../model/Todo";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

   todos:Todo[];
  
  faTrashAlt=faTrashAlt;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(
      (todo)=>{
        this.todos=todo;
      }
    )
  }
 changeTodo(todo:Todo){
   this.todoService.changeTodo(todo)
 }
 
 deleteTodo(todo:Todo){
   this.todoService.deleteTodo(todo)
 }

 addTodo(todo:Todo){
   this.todoService.AddTodo(todo);
 }



}

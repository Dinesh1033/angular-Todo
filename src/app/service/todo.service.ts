import { Injectable } from '@angular/core';
import {of} from 'rxjs'
import { Todo } from "./../model/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Todos:Todo[];


  constructor() { 
    this.Todos=[
      {
        id:"111",
        title:"learn angular",
        isCompleted:false,
        date:new Date
      },
      {
        id:"222",
        title:"learn Vue",
        isCompleted:false,
        date:new Date
      },{
        id:"333",
        title:"learn React",
        isCompleted:false,
        date:new Date
      }
    ]
  }

  getTodo(){
    return of(this.Todos);
  }

  AddTodo(todo:Todo){
    this.Todos.push(todo);
    
  }

  deleteTodo(todo:Todo){
    const first=this.Todos.findIndex((newTodo)=>{
      newTodo.id===todo.id;
    })
    this.Todos.splice(first,1)
  }

  changeTodo(todo:Todo){
    this.Todos.map((comple)=>{
      if(comple.id===todo.id){
        todo.isCompleted=!todo.isCompleted;
      }
    })
    
  }

}

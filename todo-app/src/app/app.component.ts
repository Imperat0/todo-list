import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent],
  template: `
    <app-todo-list></app-todo-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'todo-app';
}

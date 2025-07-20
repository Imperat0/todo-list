import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo, TodoFormData } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: TodoFormData = { title: '', description: '' };
  editingTodo: Todo | null = null;
  filter: 'all' | 'active' | 'completed' = 'all';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(): void {
    if (this.newTodo.title.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = { title: '', description: '' };
    }
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  startEdit(todo: Todo): void {
    this.editingTodo = { ...todo };
  }

  saveEdit(): void {
    if (this.editingTodo && this.editingTodo.title.trim()) {
      this.todoService.updateTodo(this.editingTodo.id, {
        title: this.editingTodo.title,
        description: this.editingTodo.description
      });
      this.editingTodo = null;
    }
  }

  cancelEdit(): void {
    this.editingTodo = null;
  }

  get filteredTodos(): Todo[] {
    switch (this.filter) {
      case 'active':
        return this.todos.filter(todo => !todo.completed);
      case 'completed':
        return this.todos.filter(todo => todo.completed);
      default:
        return this.todos;
    }
  }

  get completedCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }

  get totalCount(): number {
    return this.todos.length;
  }

  exportData(): void {
    const jsonData = this.todoService.exportToJson();
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'todos.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  importData(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          this.todoService.importFromJson(e.target.result);
          alert('Dados importados com sucesso!');
        } catch (error) {
          alert('Erro ao importar dados: ' + error);
        }
      };
      reader.readAsText(file);
    }
  }
} 
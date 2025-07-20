import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo, TodoFormData } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  private readonly STORAGE_KEY = 'todos';

  constructor() {
    this.loadTodos();
  }

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(todoData: TodoFormData): void {
    const newTodo: Todo = {
      id: this.generateId(),
      title: todoData.title,
      description: todoData.description || '',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.todos.push(newTodo);
    this.saveTodos();
    this.todosSubject.next([...this.todos]);
  }

  updateTodo(id: number, updates: Partial<Todo>): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos[index] = {
        ...this.todos[index],
        ...updates,
        updatedAt: new Date()
      };
      this.saveTodos();
      this.todosSubject.next([...this.todos]);
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
    this.todosSubject.next([...this.todos]);
  }

  toggleTodo(id: number): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos[index].completed = !this.todos[index].completed;
      this.todos[index].updatedAt = new Date();
      this.saveTodos();
      this.todosSubject.next([...this.todos]);
    }
  }

  private generateId(): number {
    return this.todos.length > 0 
      ? Math.max(...this.todos.map(todo => todo.id)) + 1 
      : 1;
  }

  private loadTodos(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTodos = localStorage.getItem(this.STORAGE_KEY);
      if (storedTodos) {
        try {
          this.todos = JSON.parse(storedTodos).map((todo: any) => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
            updatedAt: new Date(todo.updatedAt)
          }));
        } catch (error) {
          console.error('Erro ao carregar todos:', error);
          this.todos = [];
        }
      }
    }
    this.todosSubject.next([...this.todos]);
  }

  private saveTodos(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    }
  }

  // Método para exportar dados como JSON
  exportToJson(): string {
    return JSON.stringify(this.todos, null, 2);
  }

  // Método para importar dados de JSON
  importFromJson(jsonData: string): void {
    try {
      const importedTodos = JSON.parse(jsonData);
      this.todos = importedTodos.map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
        updatedAt: new Date(todo.updatedAt)
      }));
      this.saveTodos();
      this.todosSubject.next([...this.todos]);
    } catch (error) {
      console.error('Erro ao importar todos:', error);
      throw new Error('Formato JSON inválido');
    }
  }
} 
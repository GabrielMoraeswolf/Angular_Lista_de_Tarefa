// src/app/page/page.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  tasks: any[] = [];
  showAllTasks = false;
  filterStatus: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    let url = 'http://localhost:3001/tarefas';
    if (this.filterStatus) {
      url = `http://localhost:3001/tarefas/status/${this.filterStatus}`;
    }

    this.http.get(url).subscribe(
      (data: any) => {
        this.tasks = data as any[];
      },
      (error) => {
        console.error('Erro ao obter tarefas:', error);
      }
    );
  }

  addTask(taskName: string): void {
    this.http.post('http://localhost:3001/tarefas', {
      descricao: taskName,
      status: 'Pendente'
    }).subscribe(
      (newTask: any) => {
        this.tasks.push(newTask);
      },
      (error) => {
        console.error('Erro ao adicionar tarefa:', error);
      }
    );
  }

  editTask(event: { taskId: number, updatedTaskName: string, updatedStatus: string }): void {
    const { taskId, updatedTaskName, updatedStatus } = event;
    
    this.http.put(`http://localhost:3001/tarefas/${taskId}`, {
      descricao: updatedTaskName,
      status: updatedStatus
    }).subscribe(
      (response: any) => {
        this.tasks = this.tasks.map((task) => (task.id === taskId ? response.data as any : task));
      },
      (error) => {
        console.error('Erro ao editar tarefa:', error);
      }
    );
  }

  removeTask(taskId: number): void {
    this.http.delete(`http://localhost:3001/tarefas/${taskId}`).subscribe(
      () => {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      },
      (error) => {
        console.error('Erro ao remover tarefa:', error);
      }
    );
  }

  showAllTasksHandler(): void {
    this.showAllTasks = true;
    this.fetchTasks();
  }

  filterStatusHandler(selectedStatus: string | null): void {
    this.filterStatus = selectedStatus;
    this.showAllTasks = false;
    this.fetchTasks();
  }

  clearFilterHandler(): void {
    this.filterStatusHandler(null);
    this.showAllTasksHandler();
  }

  filterTasksHandler(): void {
    if (this.filterStatus) {
      this.fetchTasks();
    }
  }
 
}
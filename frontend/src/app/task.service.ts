// src/app/services/task.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3001/tarefas';

  constructor(private http: HttpClient) { }

  getTasks(filterStatus: string | null): Observable<any[]> {
    let url = this.apiUrl;
    if (filterStatus) {
      url = `${this.apiUrl}/status/${filterStatus}`;
    }
    return this.http.get<any[]>(url);
  }

  addTask(taskName: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { descricao: taskName, status: 'Pendente' });
  }

  editTask(taskId: number, updatedTaskName: string, updatedStatus: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${taskId}`, { descricao: updatedTaskName, status: updatedStatus });
  }

  removeTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }
}

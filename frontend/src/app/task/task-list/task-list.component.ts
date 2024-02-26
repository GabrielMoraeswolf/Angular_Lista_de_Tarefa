import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model'; 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() editTask = new EventEmitter<{ taskId: number; updatedTaskName: string; updatedStatus: string }>();
  @Output() removeTask = new EventEmitter<number>();

  onEditTask(eventData: { taskId: number; updatedTaskName: string; updatedStatus: string }): void {
    this.editTask.emit(eventData);
  }

  onRemoveTask(taskId: number): void {
    this.removeTask.emit(taskId);
  }
}

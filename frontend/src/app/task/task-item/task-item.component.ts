import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: any;
  @Output() editTask = new EventEmitter<{ taskId: number, updatedTaskName: string, updatedStatus: string }>();
  @Output() removeTask = new EventEmitter<number>()

  isEditing: boolean = false;
  updatedTaskName: string = '';
  updatedStatus: string = '';

  setUpdatedStatus(status: string): void {
    this.updatedStatus = status;
  }

  handleSave(): void {
    if (this.updatedTaskName.trim() !== '' && this.updatedStatus.trim() !== '') {

      this.editTask.emit({
        taskId: this.task?.id || 0,
        updatedTaskName: this.updatedTaskName,
        updatedStatus: this.updatedStatus,
      });

      this.isEditing = false;
      this.updatedTaskName = '';
      this.updatedStatus = '';
    }
  }

  handleEdit(): void {
    this.isEditing = true;
  }
}


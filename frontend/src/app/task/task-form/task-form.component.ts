import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<string>();
  taskName: string = '';

  handleSubmit() {
    this.addTask.emit(this.taskName);
    this.taskName = '';
  }
}

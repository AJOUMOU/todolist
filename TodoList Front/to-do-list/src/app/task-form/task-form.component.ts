// src/app/task-form/task-form.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone:true,
  templateUrl: './task-form.component.html',
   schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    this.taskService.addTask(this.title, this.description).subscribe(() => {
      this.title = '';
      this.description = '';
    });
  }
}
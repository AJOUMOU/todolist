// src/app/task-list/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../model/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: number | undefined): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks(); // Refresh the list after deletion
    });
  }
}
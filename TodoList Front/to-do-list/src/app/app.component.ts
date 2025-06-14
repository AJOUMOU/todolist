import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaskFormComponent,
    TaskListComponent,HttpClientModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
}

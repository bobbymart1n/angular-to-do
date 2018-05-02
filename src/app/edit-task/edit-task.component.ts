import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() clickedDone = new EventEmitter();
  constructor() { }
  finishedEditing() {
    this.clickedDone.emit();
  }
}

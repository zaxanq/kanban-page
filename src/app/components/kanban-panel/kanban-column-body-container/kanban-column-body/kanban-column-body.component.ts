import {Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import { Task } from '../../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-column-body',
  templateUrl: './kanban-column-body.component.html',
  styleUrls: ['./kanban-column-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class KanbanColumnBodyComponent implements OnInit {
  @Input() column: object;
  @Input() isActive = false;
  @Input() taskList: Task[];
  @Input() taskListName: string;
  @Output() updatedTask = new EventEmitter();
  @Input() currentId: number;
  @Input() status: number;

  constructor() {}

  taskUpdate(task) {
    this.updatedTask.emit(task);
  }

  ngOnInit(): void {}

  setTaskList() {
    localStorage.setItem(this.taskListName, JSON.stringify(this.taskList));
  }

  getTaskList() {
    this.taskList = JSON.parse(localStorage.getItem(this.taskListName));
  }

  createTask(): void {
    const newTask = {id: this.currentId + 1, status: 0, title: 'Task bez nazwy', content: 'Opis taska', isNew: false};
    this.getTaskList();
    this.taskList.push(newTask);
    this.currentId += 1;
    this.setTaskList();
    console.log(this.taskList);
  }

  toggleCardActive(event: MouseEvent): void {
    const ignoredTags = ['mat-icon', 'input', 'textarea', 'h4', 'span'];
    event.stopPropagation();
    event.preventDefault();
    const activeClass = 'card--active';
    const previousSelection = document.getElementsByClassName(activeClass)[0]; // previous selected card (with card-active class)
    const target = event.currentTarget as HTMLTextAreaElement; // clicked card
    const specificTarget = event.target as HTMLTextAreaElement; // specific clicked element
    if (target.tagName === 'APP-KANBAN-CARD') { // if a card is clicked
      if (!ignoredTags.includes(specificTarget.tagName.toLowerCase())) {
        this.isActive = !this.isActive; // set Active
        target.classList.add(activeClass); // add Active class for clicked card
        if (previousSelection) { // if previous selected card exists
          previousSelection.classList.remove(activeClass); // deselect it
          if (target === previousSelection ) { // if clicked card was already active
            target.classList.remove(activeClass); // deselect it
          }
        }
      }
    }
  }
}

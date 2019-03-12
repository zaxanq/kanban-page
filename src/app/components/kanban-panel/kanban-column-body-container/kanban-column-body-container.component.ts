import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Task} from '../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-column-body-container',
  templateUrl: './kanban-column-body-container.component.html',
  styleUrls: ['./kanban-column-body-container.component.scss']
})

export class KanbanColumnBodyContainerComponent implements OnInit {
  taskListToDo: Task[] = [];
  taskListInProgress: Task[] = [];
  taskListDone: Task[] = [];
  @Input() currentId: number;
  deselectCard = false;

  @Input() columns = [
    {class: 'column--to-do', status: 0, taskList: this.taskListToDo, taskListName: 'taskListToDo'},
    {class: 'column--in-progress', status: 1, taskList: this.taskListInProgress, taskListName: 'taskListInProgress'},
    {class: 'column--done', status: 2, taskList: this.taskListDone, taskListName: 'taskListDone'}
  ];
  maxId: number[] = [0, 0, 0];

  constructor(private elementReference: ElementRef) { }

  ngOnInit(): void {
    if (!localStorage.getItem('taskListToDo')) {
      this.setTaskList();
      this.currentId = 0;
    } else {
      this.getTaskList();
      this.currentId = Math.max(this.maxId[0], this.maxId[1], this.maxId[2]);
    }
  }

  setTaskList() {
    for (let i = 0; i < this.columns.length; i++) {
      localStorage.setItem(this.columns[i].taskListName, JSON.stringify(this.columns[i].taskList));
    }
  }

  getTaskList() {
    for (let i = 0; i < this.columns.length; i++) {
      if (JSON.parse(localStorage.getItem(this.columns[i].taskListName)).length > 0) {
        this.columns[i].taskList = JSON.parse(localStorage.getItem(this.columns[i].taskListName));
        this.maxId[i] = this.columns[i].taskList[this.columns[i].taskList.length - 1].id;
      } else {
        this.setTaskList();
      }
    }
  }

  taskUpdate(task) {
    let taskToMove: Task;
    let targetList: Task[];
    if (task.status === 0) {
      targetList = this.taskListToDo;
    } else if (task.status === 1) {
      targetList = this.taskListInProgress;
    } else if (task.status === 2) {
      targetList = this.taskListDone;
    }
    for (let i = 0; i < targetList.length; i++) {
      if (task.id === targetList[i].id) {
        taskToMove = targetList.splice(i, 1)[0];
        break;
      }
    }
    if (task.type === 'increase') {
      taskToMove.status += 1;
      if (task.status === 0) {
        this.taskListInProgress = this.taskListInProgress.slice();
        this.taskListInProgress.push(taskToMove);
      } else if (task.status === 1) {
        this.taskListDone = this.taskListDone.slice();
        this.taskListDone.push(taskToMove);
      }
    } else if (task.type === 'decrease') {
      taskToMove.status -= 1;
      if (task.status === 1) {
        this.taskListToDo = this.taskListToDo.slice();
        this.taskListToDo.push(taskToMove);
      } else if (task.status === 2) {
        this.taskListInProgress = this.taskListInProgress.slice();
        this.taskListInProgress.push(taskToMove);
      }
    }
  }
  clearActive($event: MouseEvent): void {
    const children = Array.from(this.elementReference.nativeElement.children);
    children.forEach((child) => {
      if ($event.target === child) {
        this.deselectCard = true;
      }
    });
  }
}

import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Task} from '../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-column-body-container',
  templateUrl: './kanban-column-body-container.component.html',
  styleUrls: ['./kanban-column-body-container.component.scss']
})

export class KanbanColumnBodyContainerComponent implements OnInit {
  taskListToDo: Task[] = [
    {
      id: 0,
      status: 0,
      isNew: false,
      title: 'Tytuł taska',
      content: 'Do zrobienia jeszcze to i to i to i to. I tamto.'
    },
    {
      id: 1,
      status: 0,
      isNew: false,
      title: 'Tytuł kolejnego taska',
      content: 'To też trzeba zrobić.'
    },
    {
      id: 2,
      status: 0,
      isNew: false,
      title: 'Tytuł jeszcze kolejnego taska',
      content: 'Następna rzecz do zrobienia, która nie została jeszcze zaczęta, a dobrze byłoby ją skończyć.'
    },
    {
      id: 7,
      status: 0,
      isNew: false,
      title: 'Nierozpoczęty task',
      content: 'Status taska to 0. Jego ramka będzie czerwona.'
    }
  ];
  taskListInProgress: Task[] = [
    {
      id: 3,
      status: 1,
      isNew: false,
      title: 'Tytuł rozpoczętego taska',
      content: 'Ta rzecz z kolei jest już zaczęta, ale trzeba ją dokończyć.'
    },
    {
      id: 4,
      status: 1,
      isNew: false,
      title: 'Task o statusie 1',
      content: 'Czyli task in-progress. Do uzupełniania.'
    },
    {
      id: 6,
      status: 1,
      isNew: false,
      title: 'Rozpoczęty task',
      content: 'Status taska to 1. Jego ramka będzie żółta.'
    }
  ];
  taskListDone: Task[] = [
    {
      id: 5,
      status: 2,
      isNew: false,
      title: 'Wykonany task',
      content: 'Status taska to 2. W końcu chociaż jedna w pełni zakończona rzecz. :)'
    },
    {
      id: 8,
      status: 2,
      isNew: false,
      title: 'Ukończony task',
      content: 'Status taska to 2. Jego ramka będzie zielona.'
    }
  ];
  deselectCard = false;

  constructor(private elementReference: ElementRef) { }
  ngOnInit(): void {}
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

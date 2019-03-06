import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-column-body',
  templateUrl: './kanban-column-body.component.html',
  styleUrls: ['./kanban-column-body.component.scss']
})
export class KanbanColumnBodyComponent implements OnInit {
  @Input() status: number;
  @Input() isActive = false;
  taskList: Task[] = [
    {
      id: 1,
      status: 0,
      title: 'Tytuł taska',
      content: 'Do zrobienia jeszcze to i to i to i to. I tamto.'
    },
    {
      id: 2,
      status: 0,
      title: 'Tytuł kolejnego taska',
      content: 'To też trzeba zrobić.'
    },
    {
      id: 3,
      status: 0,
      title: 'Tytuł jeszcze kolejnego taska',
      content: 'Następna rzecz do zrobienia, która nie została jeszcze zaczęta, a dobrze byłoby ją skończyć.'
    },
    {
      id: 4,
      status: 1,
      title: 'Tytuł rozpoczętego taska',
      content: 'Ta rzecz z kolei jest już zaczęta, ale trzeba ją dokończyć.'
    },
    {
      id: 5,
      status: 1,
      title: 'Task o statusie 1',
      content: 'Czyli task in-progress. Do uzupełniania.'
    },
    {
      id: 6,
      status: 2,
      title: 'Wykonany task',
      content: 'Status taska to 2. W końcu chociaż jedna w pełni zakończona rzecz. :)'
    },
    {
      id: 7,
      status: 1,
      title: 'Rozpoczęty task',
      content: 'Status taska to 1. Jego ramka będzie żółta.'
    },
    {
      id: 8,
      status: 0,
      title: 'Nierozpoczęty task',
      content: 'Status taska to 0. Jego ramka będzie czerwona.'
    },
    {
      id: 9,
      status: 2,
      title: 'Ukończony task',
      content: 'Status taska to 2. Jego ramka będzie zielona.'
    }
  ];
  constructor() { }

  ngOnInit(): void {}
  toggleCardActive($event: MouseEvent): void {
    $event.stopPropagation();
    const activeClass = 'card--active';
    const previousSelection = document.getElementsByClassName(activeClass)[0];
    const target = $event.currentTarget  as HTMLTextAreaElement;
    this.isActive = true;
    target.classList.add(activeClass);
    if (target === previousSelection) {
      target.classList.remove(activeClass);
    }
    if (previousSelection) {
      previousSelection.classList.remove(activeClass);
    }
    console.log($event.currentTarget);
  }
}

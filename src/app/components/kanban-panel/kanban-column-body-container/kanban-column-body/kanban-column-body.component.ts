import {Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-column-body',
  templateUrl: './kanban-column-body.component.html',
  styleUrls: ['./kanban-column-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class KanbanColumnBodyComponent implements OnInit {
  @Input() status: number;
  @Input() isActive = false;
  @Input() deselect: boolean;
  @Input() currentId = 9;

  taskList: Task[] = [
    {
      id: 1,
      status: 0,
      isNew: false,
      title: 'Tytuł taska',
      content: 'Do zrobienia jeszcze to i to i to i to. I tamto.'
    },
    {
      id: 2,
      status: 0,
      isNew: false,
      title: 'Tytuł kolejnego taska',
      content: 'To też trzeba zrobić.'
    },
    {
      id: 3,
      status: 0,
      isNew: false,
      title: 'Tytuł jeszcze kolejnego taska',
      content: 'Następna rzecz do zrobienia, która nie została jeszcze zaczęta, a dobrze byłoby ją skończyć.'
    },
    {
      id: 4,
      status: 1,
      isNew: false,
      title: 'Tytuł rozpoczętego taska',
      content: 'Ta rzecz z kolei jest już zaczęta, ale trzeba ją dokończyć.'
    },
    {
      id: 5,
      status: 1,
      isNew: false,
      title: 'Task o statusie 1',
      content: 'Czyli task in-progress. Do uzupełniania.'
    },
    {
      id: 6,
      status: 2,
      isNew: false,
      title: 'Wykonany task',
      content: 'Status taska to 2. W końcu chociaż jedna w pełni zakończona rzecz. :)'
    },
    {
      id: 7,
      status: 1,
      isNew: false,
      title: 'Rozpoczęty task',
      content: 'Status taska to 1. Jego ramka będzie żółta.'
    },
    {
      id: 8,
      status: 0,
      isNew: false,
      title: 'Nierozpoczęty task',
      content: 'Status taska to 0. Jego ramka będzie czerwona.'
    },
    {
      id: 9,
      status: 2,
      isNew: false,
      title: 'Ukończony task',
      content: 'Status taska to 2. Jego ramka będzie zielona.'
    }
  ];
  constructor() {
    if (this.deselect === true) {
    console.log('MAMY TO');
    this.isActive = false;
    }
  }

  ngOnInit(): void {}

  createTask(): void {
    const newTask = {id: this.currentId + 1, status: 0, title: 'Task bez nazwy', content: 'Opis taska', isNew: false};
    this.taskList.push(newTask);
    this.currentId += 1;
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
    console.log(target);
  }
}

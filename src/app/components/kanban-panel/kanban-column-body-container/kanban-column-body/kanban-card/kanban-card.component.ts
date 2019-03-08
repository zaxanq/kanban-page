import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
    @Input() taskList: Task[] = [
    { id: 1, status: 0, title: 'Tytuł taska',
      content: 'Do zrobienia jeszcze to i to i to i to. I tamto.'
    },
    { id: 2, status: 0, title: 'Tytuł kolejnego taska',
      content: 'To też trzeba zrobić.'
    },
    { id: 3, status: 0, title: 'Tytuł jeszcze kolejnego taska',
      content: 'Następna rzecz do zrobienia, która nie została jeszcze zaczęta, a dobrze byłoby ją skończyć.'
    },
    { id: 4, status: 1, title: 'Tytuł rozpoczętego taska',
      content: 'Ta rzecz z kolei jest już zaczęta, ale trzeba ją dokończyć.'
    },
    { id: 5, status: 1, title: 'Task o statusie 1',
      content: 'Czyli task in-progress. Do uzupełniania.'
    },
    { id: 6, status: 2, title: 'Wykonany task',
      content: 'Status taska to 2. W końcu chociaż jedna w pełni zakończona rzecz. :)'
    },
    { id: 7, status: 1, title: 'Rozpoczęty task',
      content: 'Status taska to 1. Jego ramka będzie żółta.'
    },
    { id: 8, status: 0, title: 'Nierozpoczęty task',
      content: 'Status taska to 0. Jego ramka będzie czerwona.'
    },
    { id: 9, status: 2, title: 'Ukończony task',
      content: 'Status taska to 2. Jego ramka będzie zielona.'
    }
  ];
  @Input() task: Task;
  @Input() isFavourite = false;
  @Input() editableTitle = false;
  @Input() editableContent = false;
  @Output() emittedTaskList = new EventEmitter<Task[]>();
  constructor(private elementReference: ElementRef) { }

  public sendTaskList() {
    this.emittedTaskList.emit(this.taskList);
  }
  ngOnInit(): void {}
  toggleFavourite(): void {
   this.isFavourite = !this.isFavourite;
  }
  removeTask(): void {
    const element = this.elementReference.nativeElement;
    element.classList.add('hide-card');
    setInterval(() => element.remove(), 250);
  }
  openEditable(event: MouseEvent, what) {
    event.stopPropagation();
    event.preventDefault();
    if (what === 'title') {
      this.editableTitle = !this.editableTitle;
      const sibling = event.target as HTMLInputElement;
      console.log(sibling);
      console.log(sibling.parentElement);
      console.log(sibling.parentElement.querySelector('input'));
      sibling.parentElement.getElementsByTagName('input')[0].focus();
      console.log(event.target);
    } else if (what === 'content') {
      this.editableContent = !this.editableContent;
    }
  }
  closeEditable(event: KeyboardEvent, what) {
    if (event.key === 'Enter') {
      if (what === 'title') {
        this.editableTitle = !this.editableTitle;
      } else if (what === 'content') {
        console.log('toggleEditable CONTENT działa');
        this.editableContent = !this.editableContent;
      }
    }
  }
}

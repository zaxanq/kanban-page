import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../../../../interfaces/task.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() status: number;
  @Input() taskList: Task[];
  @Input() taskListName: string;
  @Input()
  set task(task: Task) {
    if (task && this.cardForm) {
      this.cardTask = task;
      this.cardForm.controls.cardTitle.setValue(task.title);
    }
  }
  @Input() isFavourite = false;
  @Input() editableTitle = false;
  @Input() editableContent = false;
  @Input() newTask = false;
  @Output() updatedTask = new EventEmitter;
  @Output() updatedId = new EventEmitter;
  cardForm: FormGroup;
  cardTask: Task;

  constructor(private elementReference: ElementRef, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initCardForm();
  }

  initCardForm(): void {
    this.cardForm = this.fb.group({
      cardTitle: [this.cardTask ? this.cardTask.title : '', Validators.required],
      cardContent: ['', Validators.required],
    });
  }

  toggleFavourite(): void {
    this.isFavourite = !this.isFavourite;
  }

  removeTask(): void {
    const element = this.elementReference.nativeElement;
    element.classList.add('hide-card');
    setTimeout(() => {
      this.getTaskList();
      for (let i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].id === Number(element.id)) {
          this.taskList.splice(i, 1);
        }
      }
      this.setTaskList();
      element.remove();
      // TODO: reset currentId if taskList.length === 0
    }, 250);
  }

  setTaskList() {
    localStorage.setItem(this.taskListName, JSON.stringify(this.taskList));
  }

  getTaskList() {
    this.taskList = JSON.parse(localStorage.getItem(this.taskListName));
  }

  openEditable(event: MouseEvent, what) {
    event.stopPropagation();
    event.preventDefault();
    if (what === 'title') {
      this.editableTitle = !this.editableTitle;
      // this.taskList[0].title
      setTimeout(() => console.log(this.cardForm.get('cardTitle')), 0);
    } else if (what === 'content') {
      setTimeout(() => console.log(this.cardForm.get('cardContent')), 0);
      this.editableContent = !this.editableContent;
    }
  }

  closeEditable(event: KeyboardEvent, what) {
    const task = this.elementReference.nativeElement;
    this.getTaskList();
    if (event.key === 'Enter') {
      for (let i = 0; i < this.taskList.length; i++) {
        if (Number(task.id) === this.taskList[i].id) {
          if (what === 'title') {
            // this.taskList[i].title = this.cardTitle.value;
            this.editableTitle = !this.editableTitle;
          } else if (what === 'content') {
            // this.taskList[i].content = this.cardContent.value;
            // TODO: use Reactive Forms
            this.editableContent = !this.editableContent;
          }
          break;
        }
      }
      this.taskList = this.taskList.slice();
      this.setTaskList();
      // modify content value
    } else if (event.key === 'Escape') {
      for (let i = 0; i < this.taskList.length; i++) {
        if (Number(task.id) === this.taskList[i].id) {
          if (what === 'title') {
            this.task.title = this.taskList[i].title;
            this.editableTitle = !this.editableTitle;
          } else if (what === 'content') {
            this.task.content = this.taskList[i].content;
            this.editableContent = !this.editableContent;
          }
          break;
        }
      }
    }
    this.newTask = false;
  }

  updateStatus(type): void {
    this.updatedTask.emit({id: this.task.id, status: this.task.status, type: type});
  }
}

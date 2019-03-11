import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Task } from '../../../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() status: number;
  @Input() taskList: Task[];
  @Input() task: Task;
  @Input() isFavourite = false;
  @Input() editableTitle = false;
  @Input() editableContent = false;
  @Input() newTask = false;
  @Output() updatedTask = new EventEmitter;
  @ViewChild('cardTitle') cardTitle: ElementRef;
  @ViewChild('cardContent') cardContent: ElementRef;
  constructor(private elementReference: ElementRef) {}
  ngOnInit(): void {}
  toggleFavourite(): void {
   this.isFavourite = !this.isFavourite;
  }
  removeTask(): void {
    const element = this.elementReference.nativeElement;
    element.classList.add('hide-card');
    setTimeout(() => {
      element.remove();
      // console.log(element.id);
      // localStorage.removeItem(element.id);
    }, 250);
  }
  openEditable(event: MouseEvent, what) {
    event.stopPropagation();
    event.preventDefault();
    if (what === 'title') {
      this.editableTitle = !this.editableTitle;
      setTimeout(() => this.cardTitle.nativeElement.focus(), 0);
    } else if (what === 'content') {
      setTimeout(() => this.cardContent.nativeElement.focus(), 0);
      this.editableContent = !this.editableContent;
    }
  }
  closeEditable(event: KeyboardEvent, what) {
    if (event.key === 'Enter') {
      if (what === 'title') {
        this.editableTitle = !this.editableTitle;
      } else if (what === 'content') {
        this.editableContent = !this.editableContent;
      }
      this.newTask = false;
    }
  }
  updateStatus(type): void {
      this.updatedTask.emit({id: this.task.id, status: this.task.status, type: type});
  }
}

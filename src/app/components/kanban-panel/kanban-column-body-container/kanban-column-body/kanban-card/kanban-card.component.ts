import {Component, ElementRef, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Output() toRemove: boolean;
  @Input() task: Task;
  @Input() status: number;
  @Input() isFavourite = false;
  @Input() editableTitle = false;
  @Input() editableContent = false;
  constructor(private elementReference: ElementRef) { }

  ngOnInit(): void {
  }
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

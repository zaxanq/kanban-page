import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../../../../../interfaces/task.interface';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() task: Task;
  @Input() status: number;
  @Input() isFavourite = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleFavourite():void {
   this.isFavourite = !this.isFavourite;
  }
}

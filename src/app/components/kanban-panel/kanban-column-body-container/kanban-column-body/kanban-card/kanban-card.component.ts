import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() task: object;
  @Input() status: number;
  @Input() isActive = false;
  constructor() { }

  ngOnInit() {
  }

  toggleCardActive() {
    this.isActive = !this.isActive;
  }
}

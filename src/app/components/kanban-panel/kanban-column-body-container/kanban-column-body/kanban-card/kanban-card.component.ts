import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() task: object;
  constructor() { }

  ngOnInit() {
  }

}

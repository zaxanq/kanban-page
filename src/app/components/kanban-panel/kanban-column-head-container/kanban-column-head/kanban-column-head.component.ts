import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kanban-column-head',
  templateUrl: './kanban-column-head.component.html',
  styleUrls: ['./kanban-column-head.component.scss']
})
export class KanbanColumnHeadComponent implements OnInit {
  @Input() columnTitle: string;
  constructor() { }

  ngOnInit() {
  }

}

import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-kanban-column-body-container',
  templateUrl: './kanban-column-body-container.component.html',
  styleUrls: ['./kanban-column-body-container.component.scss']
})

export class KanbanColumnBodyContainerComponent implements OnInit {
  deselectCard: boolean = false;
  constructor(private elementReference: ElementRef) { }

  ngOnInit(): void {}

  clearActive($event: MouseEvent): void {
    const children = Array.from(this.elementReference.nativeElement.children);
    children.forEach((child) => {
      if ($event.target === child) {
        this.deselectCard = true;

      }
    });
  }


}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kanban-column-body',
  templateUrl: './kanban-column-body.component.html',
  styleUrls: ['./kanban-column-body.component.scss']
})
export class KanbanColumnBodyComponent implements OnInit {
  @Input() columnStatus: number;
  @Input() isActive = false;
  @Input() deselect: boolean;
  constructor() {
    if (this.deselect === true) {
      console.log('MAMY TO');
      this.isActive = false;
    }
  }
  ngOnInit(): void {
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
          if (target === previousSelection) { // if clicked card was already active
            target.classList.remove(activeClass); // deselect it
          }
        }
      }
    }
    console.log(target);
  }
  newTask() {
  }
}

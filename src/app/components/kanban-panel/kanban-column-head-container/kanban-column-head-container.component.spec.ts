import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanColumnHeadContainerComponent } from './kanban-column-head-container.component';

describe('KanbanColumnHeadContainerComponent', () => {
  let component: KanbanColumnHeadContainerComponent;
  let fixture: ComponentFixture<KanbanColumnHeadContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanColumnHeadContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanColumnHeadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

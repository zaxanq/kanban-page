import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanColumnHeadComponent } from './kanban-column-head.component';

describe('KanbanColumnHeadComponent', () => {
  let component: KanbanColumnHeadComponent;
  let fixture: ComponentFixture<KanbanColumnHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanColumnHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanColumnHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

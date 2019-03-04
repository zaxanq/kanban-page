import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanColumnBodyComponent } from './kanban-column-body.component';

describe('KanbanColumnBodyComponent', () => {
  let component: KanbanColumnBodyComponent;
  let fixture: ComponentFixture<KanbanColumnBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanColumnBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanColumnBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

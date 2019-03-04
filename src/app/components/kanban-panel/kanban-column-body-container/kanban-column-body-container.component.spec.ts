import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanColumnBodyContainerComponent } from './kanban-column-body-container.component';

describe('KanbanColumnBodyContainerComponent', () => {
  let component: KanbanColumnBodyContainerComponent;
  let fixture: ComponentFixture<KanbanColumnBodyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanColumnBodyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanColumnBodyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

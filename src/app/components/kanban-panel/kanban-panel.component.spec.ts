import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanPanelComponent } from './kanban-panel.component';

describe('KanbanPanelComponent', () => {
  let component: KanbanPanelComponent;
  let fixture: ComponentFixture<KanbanPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

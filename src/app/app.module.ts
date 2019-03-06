import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderPanelComponent } from './components/header-panel/header-panel.component';
import { KanbanPanelComponent } from './components/kanban-panel/kanban-panel.component';
import { KanbanColumnHeadContainerComponent } from './components/kanban-panel/kanban-column-head-container/kanban-column-head-container.component';
import { KanbanColumnBodyContainerComponent } from './components/kanban-panel/kanban-column-body-container/kanban-column-body-container.component';
import { KanbanColumnBodyComponent } from './components/kanban-panel/kanban-column-body-container/kanban-column-body/kanban-column-body.component';
import { KanbanColumnHeadComponent } from './components/kanban-panel/kanban-column-head-container/kanban-column-head/kanban-column-head.component';
import { KanbanCardComponent } from './components/kanban-panel/kanban-column-body-container/kanban-column-body/kanban-card/kanban-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    KanbanPanelComponent,
    KanbanColumnHeadContainerComponent,
    KanbanColumnBodyContainerComponent,
    KanbanColumnBodyComponent,
    KanbanColumnHeadComponent,
    KanbanCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

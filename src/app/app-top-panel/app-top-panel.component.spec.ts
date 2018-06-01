import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopPanelComponent } from './app-top-panel.component';

describe('AppTopPanelComponent', () => {
  let component: AppTopPanelComponent;
  let fixture: ComponentFixture<AppTopPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTopPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDemoComponent } from './view-demo.component';

describe('ViewDemoComponent', () => {
  let component: ViewDemoComponent;
  let fixture: ComponentFixture<ViewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

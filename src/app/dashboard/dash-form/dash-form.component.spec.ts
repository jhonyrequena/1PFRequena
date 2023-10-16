import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFormComponent } from './dash-form.component';

describe('DashFormComponent', () => {
  let component: DashFormComponent;
  let fixture: ComponentFixture<DashFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashFormComponent]
    });
    fixture = TestBed.createComponent(DashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

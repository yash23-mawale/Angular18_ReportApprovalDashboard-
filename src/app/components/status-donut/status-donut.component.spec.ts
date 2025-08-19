import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDonutComponent } from './status-donut.component';

describe('StatusDonutComponent', () => {
  let component: StatusDonutComponent;
  let fixture: ComponentFixture<StatusDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusDonutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaywiseStackedComponent } from './daywise-stacked.component';

describe('DaywiseStackedComponent', () => {
  let component: DaywiseStackedComponent;
  let fixture: ComponentFixture<DaywiseStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaywiseStackedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaywiseStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

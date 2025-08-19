import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerDonutComponent } from './reviewer-donut.component';

describe('ReviewerDonutComponent', () => {
  let component: ReviewerDonutComponent;
  let fixture: ComponentFixture<ReviewerDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewerDonutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLineDonutComponent } from './pending-line-donut.component';

describe('PendingLineDonutComponent', () => {
  let component: PendingLineDonutComponent;
  let fixture: ComponentFixture<PendingLineDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingLineDonutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingLineDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

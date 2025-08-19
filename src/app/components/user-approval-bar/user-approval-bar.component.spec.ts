import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApprovalBarComponent } from './user-approval-bar.component';

describe('UserApprovalBarComponent', () => {
  let component: UserApprovalBarComponent;
  let fixture: ComponentFixture<UserApprovalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserApprovalBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserApprovalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

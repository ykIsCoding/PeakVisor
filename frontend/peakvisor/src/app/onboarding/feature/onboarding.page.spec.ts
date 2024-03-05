import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingpageComponent } from './onboarding.page';

describe('OnboardingpageComponent', () => {
  let component: OnboardingpageComponent;
  let fixture: ComponentFixture<OnboardingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

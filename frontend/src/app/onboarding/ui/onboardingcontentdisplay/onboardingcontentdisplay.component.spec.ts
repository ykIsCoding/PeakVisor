import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingcontentdisplayComponent } from './onboardingcontentdisplay.component';

describe('OnboardingcontentdisplayComponent', () => {
  let component: OnboardingcontentdisplayComponent;
  let fixture: ComponentFixture<OnboardingcontentdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingcontentdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingcontentdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardcontentdisplayComponent } from './onboardcontentdisplay.component';

describe('OnboardcontentdisplayComponent', () => {
  let component: OnboardcontentdisplayComponent;
  let fixture: ComponentFixture<OnboardcontentdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardcontentdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardcontentdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

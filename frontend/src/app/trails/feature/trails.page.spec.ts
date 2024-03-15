import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltrailspageComponent } from './trails.page';

describe('AlltrailspageComponent', () => {
  let component: AlltrailspageComponent;
  let fixture: ComponentFixture<AlltrailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlltrailspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlltrailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

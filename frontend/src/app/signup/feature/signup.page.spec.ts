import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppageComponent } from './signup.page';

describe('SignuppageComponent', () => {
  let component: SignuppageComponent;
  let fixture: ComponentFixture<SignuppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignuppageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

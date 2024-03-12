import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailinformationComponent } from './trailinformation.component';

describe('TrailinformationComponent', () => {
  let component: TrailinformationComponent;
  let fixture: ComponentFixture<TrailinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailinformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrailinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

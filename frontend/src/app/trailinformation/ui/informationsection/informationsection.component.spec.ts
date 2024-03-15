import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsectionComponent } from './informationsection.component';

describe('InformationsectionComponent', () => {
  let component: InformationsectionComponent;
  let fixture: ComponentFixture<InformationsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

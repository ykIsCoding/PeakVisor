import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsboardComponent } from './statsboard.component';

describe('StatsboardComponent', () => {
  let component: StatsboardComponent;
  let fixture: ComponentFixture<StatsboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

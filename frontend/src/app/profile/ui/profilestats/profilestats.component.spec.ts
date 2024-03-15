import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilestatsComponent } from './profilestats.component';

describe('ProfilestatsComponent', () => {
  let component: ProfilestatsComponent;
  let fixture: ComponentFixture<ProfilestatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilestatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

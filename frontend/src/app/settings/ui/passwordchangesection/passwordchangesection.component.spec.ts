import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordchangesectionComponent } from './passwordchangesection.component';

describe('PasswordchangesectionComponent', () => {
  let component: PasswordchangesectionComponent;
  let fixture: ComponentFixture<PasswordchangesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordchangesectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordchangesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

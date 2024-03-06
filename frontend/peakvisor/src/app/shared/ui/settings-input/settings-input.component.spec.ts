import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInputComponent } from './settings-input.component';
import { ButtonComponent } from '../button/button.component';

describe('SettingsInputComponent', () => {
  let component: SettingsInputComponent;
  let fixture: ComponentFixture<SettingsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

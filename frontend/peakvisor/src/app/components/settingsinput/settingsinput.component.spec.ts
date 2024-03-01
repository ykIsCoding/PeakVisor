import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsinputComponent } from './settingsinput.component';
import { ButtonComponent } from '../button/button.component';

describe('SettingsinputComponent', () => {
  let component: SettingsinputComponent;
  let fixture: ComponentFixture<SettingsinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

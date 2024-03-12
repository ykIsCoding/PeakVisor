import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingspageComponent } from './settings.page';

describe('SettingspageComponent', () => {
  let component: SettingspageComponent;
  let fixture: ComponentFixture<SettingspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

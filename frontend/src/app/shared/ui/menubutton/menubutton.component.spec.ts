import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubuttonComponent } from './menubutton.component';

describe('MenubuttonComponent', () => {
  let component: MenubuttonComponent;
  let fixture: ComponentFixture<MenubuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

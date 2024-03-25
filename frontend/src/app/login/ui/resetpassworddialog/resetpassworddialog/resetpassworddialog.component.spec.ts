import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpassworddialogComponent } from './resetpassworddialog.component';

describe('ResetpassworddialogComponent', () => {
  let component: ResetpassworddialogComponent;
  let fixture: ComponentFixture<ResetpassworddialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetpassworddialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetpassworddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

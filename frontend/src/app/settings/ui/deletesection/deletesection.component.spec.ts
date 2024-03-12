import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesectionComponent } from './deletesection.component';

describe('DeletesectionComponent', () => {
  let component: DeletesectionComponent;
  let fixture: ComponentFixture<DeletesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletesectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

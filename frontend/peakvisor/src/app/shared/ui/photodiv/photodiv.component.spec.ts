import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotodivComponent } from './photodiv.component';

describe('PhotodivComponent', () => {
  let component: PhotodivComponent;
  let fixture: ComponentFixture<PhotodivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotodivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotodivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBackgroundComponent } from './photo-background.component';

describe('PhotoBackgroundComponent', () => {
  let component: PhotoBackgroundComponent;
  let fixture: ComponentFixture<PhotoBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

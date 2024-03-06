import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404Page } from './error404.page';

describe('Error404Page', () => {
  let component: Error404Page;
  let fixture: ComponentFixture<Error404Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error404Page]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Error404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

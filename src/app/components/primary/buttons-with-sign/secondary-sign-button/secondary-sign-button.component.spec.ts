import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySignButtonComponent } from './secondary-sign-button.component';

describe('SecondarySignButtonComponent', () => {
  let component: SecondarySignButtonComponent;
  let fixture: ComponentFixture<SecondarySignButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondarySignButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondarySignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

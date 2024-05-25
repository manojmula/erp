import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSignButtonComponent } from './success-sign-button.component';

describe('SuccessSignButtonComponent', () => {
  let component: SuccessSignButtonComponent;
  let fixture: ComponentFixture<SuccessSignButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessSignButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessSignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

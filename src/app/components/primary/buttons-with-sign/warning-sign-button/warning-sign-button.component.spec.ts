import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSignButtonComponent } from './warning-sign-button.component';

describe('WarningSignButtonComponent', () => {
  let component: WarningSignButtonComponent;
  let fixture: ComponentFixture<WarningSignButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningSignButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarningSignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

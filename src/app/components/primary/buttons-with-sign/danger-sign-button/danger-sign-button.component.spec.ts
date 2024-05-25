import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerSignButtonComponent } from './danger-sign-button.component';

describe('DangerSignButtonComponent', () => {
  let component: DangerSignButtonComponent;
  let fixture: ComponentFixture<DangerSignButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DangerSignButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DangerSignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySignButtonComponent } from './primary-sign-button.component';

describe('PrimarySignButtonComponent', () => {
  let component: PrimarySignButtonComponent;
  let fixture: ComponentFixture<PrimarySignButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarySignButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimarySignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

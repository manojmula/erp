import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FLayoutComponent } from './f-layout.component';

describe('FLayoutComponent', () => {
  let component: FLayoutComponent;
  let fixture: ComponentFixture<FLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

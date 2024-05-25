import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePathCardComponent } from './course-path-card.component';

describe('CoursePathCardComponent', () => {
  let component: CoursePathCardComponent;
  let fixture: ComponentFixture<CoursePathCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePathCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursePathCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

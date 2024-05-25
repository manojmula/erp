import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListCardComponent } from './course-list-card.component';

describe('CourseListCardComponent', () => {
  let component: CourseListCardComponent;
  let fixture: ComponentFixture<CourseListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

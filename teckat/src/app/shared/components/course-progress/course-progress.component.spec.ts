import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseProgressComponent } from './course-progress.component';

describe('CourseProgressComponent', () => {
  let component: CourseProgressComponent;
  let fixture: ComponentFixture<CourseProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseProgressComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

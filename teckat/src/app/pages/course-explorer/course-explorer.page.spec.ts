import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseExplorerPage } from './course-explorer.page';

describe('CourseExplorerPage', () => {
  let component: CourseExplorerPage;
  let fixture: ComponentFixture<CourseExplorerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseExplorerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseExplorerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

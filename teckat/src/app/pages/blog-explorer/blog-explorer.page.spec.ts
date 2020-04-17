import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogExplorerPage } from './blog-explorer.page';

describe('BlogExplorerPage', () => {
  let component: BlogExplorerPage;
  let fixture: ComponentFixture<BlogExplorerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogExplorerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogExplorerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

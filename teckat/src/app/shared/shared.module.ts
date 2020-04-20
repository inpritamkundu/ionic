import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabBarComponent } from "./components/tab-bar/tab-bar.component";
import { IonicModule } from "@ionic/angular";
import { CourseDetailsComponent } from "./components/course-details/course-details.component";
import { BookmarkDetailsComponent } from "./components/bookmark-details/bookmark-details.component";
import { QuestionAnswerDetailsComponent } from "./components/question-answer-details/question-answer-details.component";
import { ReplyQuestionDetailsComponent } from "./components/reply-question-details/reply-question-details.component";
import { AskQuestionComponent } from "./components/ask-question/ask-question.component";
import { AnnouncementsComponent } from "./components/announcements/announcements.component";
import { ReadCommentsComponent } from "./components/read-comments/read-comments.component";
import { CourseProgressComponent } from "./components/course-progress/course-progress.component";
import { ProgressCircleComponent } from "./components/progress-circle/progress-circle.component";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { SliderComponent } from "./components/slider/slider.component";
import { BlogCardComponent } from "./components/blog-card/blog-card.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@NgModule({
  declarations: [
    TabBarComponent,
    CourseDetailsComponent,
    BookmarkDetailsComponent,
    QuestionAnswerDetailsComponent,
    ReplyQuestionDetailsComponent,
    AskQuestionComponent,
    AnnouncementsComponent,
    ReadCommentsComponent,
    CourseProgressComponent,
    ProgressCircleComponent,
    CourseCardComponent,
    SliderComponent,
    BlogCardComponent,
    MenuBarComponent,
  ],
  imports: [IonicModule, CommonModule],
  exports: [
    TabBarComponent,
    CourseDetailsComponent,
    BookmarkDetailsComponent,
    SliderComponent,
    CourseCardComponent,
    ProgressCircleComponent,
    CourseProgressComponent,
    ReadCommentsComponent,
    AnnouncementsComponent,
    QuestionAnswerDetailsComponent,
    ReplyQuestionDetailsComponent,
    AskQuestionComponent,
    MenuBarComponent,
    BlogCardComponent,
  ],
})
export class SharedModule {}

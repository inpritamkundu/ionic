import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabBarComponent } from "./components/tab-bar/tab-bar.component";
import { IonicModule } from "@ionic/angular";
import { CourseDetailsComponent } from "./components/course-details/course-details.component";
import { BookmarkDetailsComponent } from "./components/bookmark-details/bookmark-details.component";
import { QuestionAnswerDetailsComponent } from "./components/question-answer-details/question-answer-details.component";
import { ReplyQuestionDetailsComponent } from "./components/reply-question-details/reply-question-details.component";
import { AskQuestionComponent } from "./components/ask-question/ask-question.component";

@NgModule({
  declarations: [
    TabBarComponent,
    CourseDetailsComponent,
    BookmarkDetailsComponent,
    QuestionAnswerDetailsComponent,
    ReplyQuestionDetailsComponent,
    AskQuestionComponent,
  ],
  imports: [IonicModule, CommonModule],
  exports: [
    TabBarComponent,
    CourseDetailsComponent,
    BookmarkDetailsComponent,
    QuestionAnswerDetailsComponent,
    ReplyQuestionDetailsComponent,
    AskQuestionComponent,
  ],
})
export class SharedModule {}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent implements OnInit {
  constructor(private router: Router) {}
  courseExplorer(courseId: String) {
    this.router.navigateByUrl("/tabs/tab1/course/" + courseId);
  }
  ngOnInit() {}
}

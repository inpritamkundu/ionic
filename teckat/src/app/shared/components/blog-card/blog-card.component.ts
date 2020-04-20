import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog-card",
  templateUrl: "./blog-card.component.html",
  styleUrls: ["./blog-card.component.scss"],
})
export class BlogCardComponent implements OnInit {
  constructor(private router: Router) {}

  blogExplorer(blogId: string) {
    this.router.navigateByUrl("/tabs/tab3/blog/" + blogId);
  }
  ngOnInit() {}
}

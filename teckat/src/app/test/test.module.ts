import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TestPage } from "./test.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: TestPage }]),
  ],
  declarations: [TestPage],
})
export class TestPageModule {}

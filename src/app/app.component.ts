import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  show: boolean;
  names: string[] = ["Naruto", "Kakashi", "Levi", "Sasuke", "Boruto"];

  changeShow() {
    this.show = !this.show;
  }
}

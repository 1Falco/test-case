import { Component } from "@angular/core";
import { environment } from "../../../environment/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  // just for stackblitz
  standalone: true,
})
export class AppComponent {
  public readonly version = environment.version;
  constructor() {}
}

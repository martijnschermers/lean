import { Component, Input } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";

@Component({
  selector: "lean-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent {
  @Input()
  user: UserInterface;
}

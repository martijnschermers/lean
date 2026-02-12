import { Component, Input } from "@angular/core";
import { UserInterface } from "@lean/api-interfaces";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "lean-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
  imports: [CommonModule, FormsModule]
})
export class UserFormComponent {
  @Input()
  user: UserInterface;
}

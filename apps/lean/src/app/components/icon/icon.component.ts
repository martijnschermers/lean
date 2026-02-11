import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "lean-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.css"],
  imports: [CommonModule]
})
export class IconComponent {
  @Input()
  icon: string;
}

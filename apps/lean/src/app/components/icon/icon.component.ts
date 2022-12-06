import { Component, Input } from "@angular/core";

@Component({
  selector: "lean-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.css"]
})
export class IconComponent {
  @Input()
  icon: string;
}

import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'lean-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit {
  @Input()
  icon: string;

  constructor() {}

  ngOnInit(): void {}
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLinkWithHref } from "@angular/router";
import { IconComponent } from "./icon/icon.component";

@NgModule({
  declarations: [NavbarComponent, IconComponent],
  exports: [
    NavbarComponent,
    IconComponent,
  ],
  imports: [CommonModule, RouterLinkWithHref]
})
export class ComponentsModule {
}

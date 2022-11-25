import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLinkWithHref } from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [CommonModule, RouterLinkWithHref]
})
export class ComponentsModule {
}

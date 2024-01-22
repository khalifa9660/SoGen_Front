import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  constructor() {}

  NgOnInit(): void {}

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}

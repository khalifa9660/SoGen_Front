import { Component, Input } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: "1",
      name: "Home",
      icon: "bi bi-house",
    },
    {
      number: "2",
      name: "Analytics",
      icon: "bi bi-house",
    },
    {
      number: "3",
      name: "Products",
      icon: "bi bi-house",
    },
    {
      number: "4",
      name: "Order",
      icon: "bi bi-house",
    },
    {
      number: "5",
      name: "Settings",
      icon: "bi bi-house",
    },
  ];

  constructor() {}

  ngOnInit() {}
}

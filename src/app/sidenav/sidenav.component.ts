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
      icon: "bi bi-house-door-fill",
    },
    {
      number: "2",
      name: "Joueurs",
      icon: "bi bi-person-arms-up",
    },
    {
      number: "3",
      name: "Equipes",
      icon: "bi bi-microsoft-teams",
    },
    {
      number: "4",
      name: "Nationalité",
      icon: "bi bi-flag-fill",
    },
    {
      number: "5",
      name: "Contact",
      icon: "bi bi-mailbox2-flag",
    },
  ];

  constructor() {}

  ngOnInit() {}
}

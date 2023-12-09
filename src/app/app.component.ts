import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  navHamburger: any;
  navLinks: any;

  constructor(private renderer: Renderer2) {}

  title = "SoGeneration";

  ngOnInit() {
    this.navHamburger = document.querySelector(".menu-hamburger");
    this.navLinks = document.querySelector(".nav-links");
  }

  ngAfterViewInit() {
    this.navHamburger.addEventListener("click", () => {
      this.navLinks.classList.toggle("mobile-menu");
    });
  }
}

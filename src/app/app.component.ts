import { Component, OnInit, Renderer2, OnDestroy } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  navHamburger: any;
  navLinks: any;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private media: MediaMatcher, private renderer: Renderer2) {
    this.mobileQuery = media.matchMedia("(max-width: 900px)");
    this._mobileQueryListener = () => {};
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

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

  ngOnDestroy() {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }
}

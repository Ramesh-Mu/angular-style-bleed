import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

/** @title Form field appearance variants */
@Component({
  selector: "my-container",
  templateUrl: "main-container.component.html",
  styleUrls: ["main-container.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MainContainerComponent implements AfterViewInit {
  @ViewChild("parentEl", { static: true }) parentEl!: ElementRef;
  constructor(private readonly renderer: Renderer2) {}
  ngAfterViewInit(): void {
    // const popupEl = document.createElement("popup-element") as any;
    // // Listen to the close event
    // popupEl.addEventListener("closed", () =>
    //   this.renderer.removeChild(this.parentEl, popupEl)
    // );
    // // Set the message
    // popupEl.message = "Loaded";
    // // Add to the DOM
    // console.info("adding angular element");
    // this.renderer.appendChild(this.parentEl, popupEl);
  }
}

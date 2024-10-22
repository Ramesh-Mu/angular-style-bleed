import { Component, Injector, ViewEncapsulation } from "@angular/core";
import { ɵDomSharedStylesHost } from "@angular/platform-browser";

/** @title Form field appearance variants */
@Component({
  selector: "form-field-appearance-example",
  templateUrl: "form-field-appearance-example.html",
  styleUrls: ["form-field-appearance-example.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: ɵDomSharedStylesHost,
      useClass: ɵDomSharedStylesHost,
    },
  ],
})
export class FormFieldAppearanceExample {
  constructor(private injector: Injector) {
    // this.injector.get(ɵDomSharedStylesHost).removeHost(document.head);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

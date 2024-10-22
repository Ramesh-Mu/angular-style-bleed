import { HttpClientModule } from "@angular/common/http";
import { NgModule, RendererFactory2 } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./app/material-module";

import { FormFieldAppearanceExample } from "./app/form-field-appearance-example";
import { AppComponent, CustomRendererFactory } from "./app/app.component";
import { HeaderComponent } from "./app/header.component";
import { MainContainerComponent } from "./app/main-container.component";
import { FooterComponent } from "./app/footer.component";
import { SearchComponent } from "./app/search.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    FormFieldAppearanceExample,
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    FooterComponent,
  ],
  declarations: [
    FormFieldAppearanceExample,
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    FooterComponent,
    SearchComponent,
  ],
  providers: [
    // {
    //   provide: RendererFactory2,
    //   useClass: CustomRendererFactory,
    // },
  ],
  // providers: [
  //   {
  //     provide: RendererFactory2,
  //     useClass: CustomDomRendererFactory2,
  //   },
  //],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

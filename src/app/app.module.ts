import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { Buoi1Component } from "./buoi1/buoi1.component";
import { HeaderComponent } from "./buoi1/header/header.component";
import { ContentComponent } from "./buoi1/content/content.component";
import { SideBarComponent } from "./buoi1/side-bar/side-bar.component";
import { FooterComponent } from "./buoi1/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Buoi1Component,
    HeaderComponent,
    ContentComponent,
    SideBarComponent,
    FooterComponent, //Các component sử dụng (lẫn nhau) trong module này.
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], //Nơi chứa component sử dụng trong index.html
})
export class AppModule {}

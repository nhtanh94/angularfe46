import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { Buoi1Component } from "./buoi1/buoi1.component";
import { HeaderComponent } from "./buoi1/header/header.component";
import { ContentComponent } from "./buoi1/content/content.component";
import { SideBarComponent } from "./buoi1/side-bar/side-bar.component";
import { FooterComponent } from "./buoi1/footer/footer.component";
import { Buoi2Component } from "./buoi2/buoi2.component";
import { BtHeaderComponent } from "./buoi2/bt-header/bt-header.component";
import { IndexComponent } from "./buoi2/index/index.component";
import { SliderComponent } from './buoi2/index/slider/slider.component';
import { IndexContentComponent } from './buoi2/index/index-content/index-content.component';
import { ItemComponent } from './buoi2/index/index-content/item/item.component';
import { BtFooterComponent } from './buoi2/bt-footer/bt-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Buoi1Component,
    HeaderComponent,
    ContentComponent,
    SideBarComponent,
    FooterComponent,
    Buoi2Component,
    BtHeaderComponent,
    IndexComponent,
    SliderComponent,
    IndexContentComponent,
    ItemComponent,
    BtFooterComponent,

    //Các component sử dụng (lẫn nhau) trong module này.
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], //Nơi chứa component sử dụng trong index.html
})
export class AppModule {}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo", //#id,class,tagname(Sử dụng selector như tag name của component) ....
  templateUrl: "./demo.component.html", //Nơi hiển thị nội dụng UI của component
  styleUrls: ["./demo.component.scss"], //Phần css của component này (Component khác không sử dụng được)
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

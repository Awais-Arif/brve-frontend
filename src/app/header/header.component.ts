import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  showFortcel: boolean = true;
  showAnalogit: boolean = false;
  showForm: boolean = false;
  showList: boolean = true;
  expand: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    if (window.innerWidth <= 768) {
      this.expand = false;
    }
  }

}

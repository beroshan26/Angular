import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-fixer",
  templateUrl: "./fixer.component.html",
  styleUrls: ["./fixer.component.scss"]
})
export class FixerComponent implements OnInit {
  rates: object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getDataFromFixer().subscribe(data => {
      this.rates = data;
      console.log(this.rates);
    });
  }
}

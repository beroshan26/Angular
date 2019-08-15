import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-fixer",
  templateUrl: "./fixer.component.html",
  styleUrls: ["./fixer.component.scss"]
})
export class FixerComponent implements OnInit {
  rates: object;
  ratesArray: Array<{ CCY: string; Rate: number }> = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getDataFromFixer().subscribe((data: any) => {
      this.rates = data;
      Object.keys(data.rates).forEach(res => {
        this.ratesArray.push({ CCY: res, Rate: data.rates[res] });
      });
    });
  }
}

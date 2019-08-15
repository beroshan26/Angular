import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-exchange-rate",
  templateUrl: "./exchange-rate.component.html",
  styleUrls: ["./exchange-rate.component.scss"]
})
export class ExchangeRateComponent implements OnInit {
  rates: object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getDataFromFixer().subscribe(data => {
      this.rates = data;
      console.log(this.rates);
    });
  }
}

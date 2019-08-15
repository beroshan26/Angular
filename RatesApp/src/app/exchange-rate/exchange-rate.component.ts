import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-exchange-rate",
  templateUrl: "./exchange-rate.component.html",
  styleUrls: ["./exchange-rate.component.scss"]
})
export class ExchangeRateComponent implements OnInit {
  rates: object;
  ratesArray: Array<{ CCY: string; Rate: number }> = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getDataFromExhangeRate("AUD").subscribe((data: any) => {
      this.rates = data;
      Object.keys(data.rates).forEach(res => {
        this.ratesArray.push({ CCY: res, Rate: data.rates[res] });
      });
    });
  }
}

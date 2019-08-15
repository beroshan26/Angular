import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDataFromFixer() {
    return this.http.get(
      "http://data.fixer.io/api/latest?access_key=97a1fb34053fcce7de2dffa7fdea0be7"
    );
  }

  getDataFromExhangeRate(baseCcy: string) {
    let url = "https://api.exchangeratesapi.io/latest?base=" + baseCcy;
    return this.http.get(url);
  }
}

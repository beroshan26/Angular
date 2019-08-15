import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FixerComponent } from "./fixer/fixer.component";
import { ExchangeRateComponent } from "./exchange-rate/exchange-rate.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "fixer", component: FixerComponent },
  { path: "exchange", component: ExchangeRateComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

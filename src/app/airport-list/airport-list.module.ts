import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { AirportsListPageComponent } from "./container/airport-list-page.component";
import { EffectsModule } from "@ngrx/effects";
import { AirportEffects } from "../flights-common/store/airports/airports.effect";

@NgModule({
  imports: [
    FrontendSharedModule,
    EffectsModule.forFeature([
      AirportEffects
    ])
  ],
  declarations: [
    AirportsListPageComponent
  ],
  exports: [
    AirportsListPageComponent
  ]
})
export class AirportListModule {
}

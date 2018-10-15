import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { EffectsModule } from "@ngrx/effects";
import { AirportEffects } from "./store/airports/airports.effect";
import { AirlineEffects } from "./store/airlines/airlines.effects";

@NgModule({
  imports: [
    EffectsModule.forFeature([
      AirlineEffects,
      AirportEffects
    ]),
    FrontendSharedModule
  ]
})
export class FlightsCommonModule {
}

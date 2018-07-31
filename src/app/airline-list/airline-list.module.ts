import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { AirlineListPageComponent } from "./container/airline-list-page.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    AirlineListPageComponent
  ],
  exports: [
    AirlineListPageComponent
  ]
})
export class AirlineListModule {
}

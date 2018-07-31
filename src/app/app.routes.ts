import {
  RouterModule,
  Routes
} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "airports",
    pathMatch: "full"
  }
];

export const APP_ROUTING_PROVIDERS: any[] = [];

export const ROUTING = RouterModule.forRoot(routes);

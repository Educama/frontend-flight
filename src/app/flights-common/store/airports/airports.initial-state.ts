import {
  AirportResource,
  SortOrder
} from "educama-frontend-shared";
import { AirportSlice } from "./airports.slice";

export const AIRPORT_SLICE_INITIAL_STATE: AirportSlice = {
  pageNumber: 0,
  pageSize: 20,
  totalPages: 0,
  sortBy: "country",
  sortOrder: SortOrder.ascending,
  airportList: new Array<AirportResource>(),
  loading: false
};

import {
  AirlineResource,
  SortOrder
} from "educama-frontend-shared";
import { AirlineSlice } from "./airlines.slice";

export const AIRLINE_SLICE_INITIAL_STATE: AirlineSlice = {
  pageNumber: 0,
  pageSize: 20,
  totalPages: 0,
  sortBy: "country",
  sortOrder: SortOrder.ascending,
  airlineList: new Array<AirlineResource>(),
  loading: false
};

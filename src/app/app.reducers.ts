import { ActionReducerMap } from "@ngrx/store";
import {
  ERROR_REDUCER,
  ERROR_SLICE_INITIAL_STATE,
  ErrorSlice
} from "educama-frontend-shared";
import { AirportSlice } from "./flights-common/store/airports/airports.slice";
import { AIRPORT_SLICE_INITIAL_STATE } from "./flights-common/store/airports/airports.initial-state";
import { AIRPORT_REDUCER } from "./flights-common/store/airports/airports.reducer";
import { AIRLINE_SLICE_INITIAL_STATE } from "./flights-common/store/airlines/airlines.initial-state";
import { AIRLINE_REDUCER } from "./flights-common/store/airlines/airlines.reducer";
import { AirlineSlice } from "./flights-common/store/airlines/airlines.slice";

export interface State {
  errorSlice: ErrorSlice;
  airportSlice: AirportSlice;
  airlineSlice: AirlineSlice;
}

export const INITIAL_STATE = {
  errorSlice: ERROR_SLICE_INITIAL_STATE,
  airportSlice: AIRPORT_SLICE_INITIAL_STATE,
  airlineSlice: AIRLINE_SLICE_INITIAL_STATE
};

export const reducers: ActionReducerMap<State> = {
  errorSlice: ERROR_REDUCER,
  airportSlice: AIRPORT_REDUCER,
  airlineSlice: AIRLINE_REDUCER
};

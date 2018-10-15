import {
  AirportResource,
  SortOrder
} from "educama-frontend-shared";

export interface AirportSlice {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  sortBy: string;
  sortOrder: SortOrder;
  airportList: AirportResource[];
  loading: boolean;
}

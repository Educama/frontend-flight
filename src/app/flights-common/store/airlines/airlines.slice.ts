import {
  AirlineResource,
  SortOrder
} from "educama-frontend-shared";

export interface AirlineSlice {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  sortBy: string;
  sortOrder: SortOrder;
  airlineList: AirlineResource[];
  loading: boolean;
}

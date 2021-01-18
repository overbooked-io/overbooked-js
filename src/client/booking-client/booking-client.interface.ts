import { Response, PaginatedResponse } from "./../shared/response";
import { Booking, BookingStatus } from "./../../model/booking";
import { Metadata } from "src/model/metadata";

export type BookingCreateParams = {
  slot_id: string;
  lock_key?: string;
  metadata?: Metadata;
};

export type BookingListParams = {
  page: number;
  limit: number;
  slot_id?: string;
  resource_id?: string;
  status?: BookingStatus;
};

export type BookingUpdateParams = {
  metadata?: Metadata;
};

export type BookingRescheduleParams = {
  target_slot_id: string;
};

export interface IBookingClient {
  create(params: BookingCreateParams): Promise<Response<Booking>>;

  get(id: string): Promise<Response<Booking>>;

  list(params: BookingListParams): Promise<PaginatedResponse<Booking[]>>;

  update(id: string, params: BookingUpdateParams): Promise<Response<Booking>>;

  reschedule(
    id: string,
    params: BookingRescheduleParams
  ): Promise<Response<Booking>>;

  cancel(id: string): Promise<Response<Booking>>;

  enable(id: string): Promise<Response<Booking>>;

  delete(id: string): Promise<Response<Record<string, never>>>;
}

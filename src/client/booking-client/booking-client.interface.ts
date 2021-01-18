import { Response, PaginatedResponse } from "./../shared/response";
import { Overbooked } from "../../";

export type BookingCreateParams = {
  slot_id: string;
  lock_key?: string;
  metadata?: Overbooked.Metadata;
};

export type BookingListParams = {
  page: number;
  limit: number;
  slot_id?: string;
  resource_id?: string;
  status?: Overbooked.BookingStatus;
};

export type BookingUpdateParams = {
  metadata?: Overbooked.Metadata;
};

export type BookingRescheduleParams = {
  target_slot_id: string;
};
export interface IBookingClient {
  create(
    params: Overbooked.BookingCreateParams
  ): Promise<Response<Overbooked.Booking>>;

  get(id: string): Promise<Response<Overbooked.Booking>>;

  list(
    params: Overbooked.BookingListParams
  ): Promise<PaginatedResponse<Overbooked.Booking[]>>;

  update(
    id: string,
    params: Overbooked.BookingUpdateParams
  ): Promise<Response<Overbooked.Booking>>;

  reschedule(
    id: string,
    params: Overbooked.BookingRescheduleParams
  ): Promise<Response<Overbooked.Booking>>;

  cancel(id: string): Promise<Response<Overbooked.Booking>>;

  enable(id: string): Promise<Response<Overbooked.Booking>>;

  delete(id: string): Promise<Response<Record<string, never>>>;
}

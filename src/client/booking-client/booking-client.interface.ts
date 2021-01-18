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
  /**
   * public.booking.create
   *
   * Creates new Booking object.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/create-a-booking
   */
  create(
    params: Overbooked.BookingCreateParams
  ): Promise<Response<Overbooked.Booking>>;

  /**
   * public.booking.get
   *
   * Retrieves a Booking details.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/get-a-booking
   */
  get(id: string): Promise<Response<Overbooked.Booking>>;

  /**
   * public.booking.list
   *
   * Returns paginated list of all Bookings matched by given filters.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/list-bookings
   */
  list(
    params: Overbooked.BookingListParams
  ): Promise<PaginatedResponse<Overbooked.Booking[]>>;

  /**
   * public.booking.update
   *
   * Updates the specified Booking by setting the values of the parameters passed.
   * Any parameters not provided will be left unchanged.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/update-a-booking
   */
  update(
    id: string,
    params: Overbooked.BookingUpdateParams
  ): Promise<Response<Overbooked.Booking>>;

  /**
   * public.booking.reschedule
   *
   * Reschedules the Booking to a different Slot.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/reschedule-a-booking
   */
  reschedule(
    id: string,
    params: Overbooked.BookingRescheduleParams
  ): Promise<Response<Overbooked.Booking>>;

  /**
   * public.booking.cancel
   *
   * Cancels the Booking and frees up the Slot.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/cancel-a-booking
   */
  cancel(id: string): Promise<Response<Overbooked.Booking>>;

  /**
   * public.booking.enable
   *
   * Reverts cancellation of the Booking and changes its status back to active.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/enable-a-booking
   */
  enable(id: string): Promise<Response<Overbooked.Booking>>;

  /**
   * public.booking.delete
   *
   * Permanently deletes the Booking.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/delete-a-booking
   */
  delete(id: string): Promise<Response<Record<string, never>>>;
}

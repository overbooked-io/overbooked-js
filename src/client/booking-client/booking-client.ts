import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import { Overbooked } from "../../";

export class BookingClient implements Overbooked.IBookingClient {
  public constructor(private _baseClient: BaseClient) {}

  /**
   * public.booking.create
   *
   * Creates new Booking object.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/create-a-booking
   */
  public async create(
    params: Overbooked.BookingCreateParams
  ): Promise<Response<Overbooked.Booking>> {
    const result = await this._baseClient.call<Response<Overbooked.Booking>>({
      path: "/bookings",
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Overbooked.Booking>;
  }

  /**
   * public.booking.get
   *
   * Retrieves a Booking details.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/get-a-booking
   */
  public async get(id: string): Promise<Response<Overbooked.Booking>> {
    const result = await this._baseClient.call<Response<Overbooked.Booking>>({
      path: `/bookings/${id}`,
      method: "get",
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Overbooked.Booking>;
  }

  /**
   * public.booking.list
   *
   * Returns paginated list of all Bookings matched by given filters.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/list-bookings
   */
  public async list(
    params: Overbooked.BookingListParams
  ): Promise<PaginatedResponse<Overbooked.Booking[]>> {
    const result = await this._baseClient.call<
      PaginatedResponse<Overbooked.Booking[]>
    >({
      path: `/bookings`,
      method: "get",
      params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as PaginatedResponse<Overbooked.Booking[]>;
  }

  /**
   * public.booking.update
   *
   * Updates the specified Booking by setting the values of the parameters passed.
   * Any parameters not provided will be left unchanged.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/update-a-booking
   */
  public async update(
    id: string,
    params: Overbooked.BookingUpdateParams
  ): Promise<Response<Overbooked.Booking>> {
    const result = await this._baseClient.call<Response<Overbooked.Booking>>({
      path: `/bookings/${id}`,
      method: "patch",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Overbooked.Booking>;
  }

  /**
   * public.booking.enable
   *
   * Reverts cancellation of the Booking and changes its status back to active.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/enable-a-booking
   */
  public async enable(id: string): Promise<Response<Overbooked.Booking>> {
    const result = await this._baseClient.call<Response<Overbooked.Booking>>({
      path: `/bookings/${id}/enable`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Overbooked.Booking>;
  }

  /**
   * public.booking.cancel
   *
   * Cancels the Booking and frees up the Slot.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/cancel-a-booking
   */
  public async cancel(id: string): Promise<Response<Overbooked.Booking>> {
    const result = await this._baseClient.call<Response<Overbooked.Booking>>({
      path: `/bookings/${id}/cancel`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Overbooked.Booking>;
  }

  /**
   * public.booking.reschedule
   *
   * Reschedules the Booking to a different Slot.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/reschedule-a-booking
   */
  public async reschedule(
    id: string,
    params: Overbooked.BookingRescheduleParams
  ): Promise<Response<Overbooked.Booking>> {
    const result = await this._baseClient.call<Response<Overbooked.Booking>>({
      path: `/bookings/${id}/reschedule`,
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Overbooked.Booking>;
  }

  /**
   * public.booking.delete
   *
   * Permanently deletes the Booking.
   *
   * https://docs.overbooked.io/api-reference/api-resources/booking/delete-a-booking
   */
  public async delete(
    id: string
  ): Promise<Response<Record<string, never>, { [key: string]: unknown }>> {
    return this._baseClient.call({
      path: `/bookings/${id}`,
      method: "delete",
    });
  }
}

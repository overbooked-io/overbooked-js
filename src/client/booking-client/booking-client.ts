import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import { Overbooked } from "../../";

export class BookingClient implements Overbooked.IBookingClient {
  public constructor(private _baseClient: BaseClient) {}

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

  public async delete(
    id: string
  ): Promise<Response<Record<string, never>, { [key: string]: unknown }>> {
    return this._baseClient.call({
      path: `/bookings/${id}`,
      method: "delete",
    });
  }
}

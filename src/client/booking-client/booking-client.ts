import { Booking } from "src/model/booking";
import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import { BookingRescheduleParams } from "./booking-client.interface";
import {
  IBookingClient,
  BookingCreateParams,
  BookingListParams,
  BookingUpdateParams,
} from "./booking-client.interface";

export class BookingClient implements IBookingClient {
  public constructor(private _baseClient: BaseClient) {}

  public async create(params: BookingCreateParams): Promise<Response<Booking>> {
    const result = await this._baseClient.call<Response<Booking>>({
      path: "/bookings",
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Booking>;
  }

  public async get(id: string): Promise<Response<Booking>> {
    const result = await this._baseClient.call<Response<Booking>>({
      path: `/bookings/${id}`,
      method: "get",
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Booking>;
  }

  public async list(
    params: BookingListParams
  ): Promise<PaginatedResponse<Booking[]>> {
    const result = await this._baseClient.call<PaginatedResponse<Booking[]>>({
      path: `/bookings`,
      method: "get",
      params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as PaginatedResponse<Booking[]>;
  }

  public async update(
    id: string,
    params: BookingUpdateParams
  ): Promise<Response<Booking>> {
    const result = await this._baseClient.call<Response<Booking>>({
      path: `/bookings/${id}`,
      method: "patch",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Booking>;
  }

  public async enable(id: string): Promise<Response<Booking>> {
    const result = await this._baseClient.call<Response<Booking>>({
      path: `/bookings/${id}/enable`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Booking>;
  }

  public async cancel(id: string): Promise<Response<Booking>> {
    const result = await this._baseClient.call<Response<Booking>>({
      path: `/bookings/${id}/cancel`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Booking>;
  }

  public async reschedule(
    id: string,
    params: BookingRescheduleParams
  ): Promise<Response<Booking>> {
    const result = await this._baseClient.call<Response<Booking>>({
      path: `/bookings/${id}/reschedule`,
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "booking"
    ) as Response<Booking>;
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

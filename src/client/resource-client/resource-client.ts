import { Resource, ResourceStatus } from "./../../model";
import { Metadata } from "./../../model/metadata";
import { Timezone } from "./../../model/timezone";
import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import { IResourceClient } from "./resource-client.interface";

export class ResourceClient implements IResourceClient {
  public constructor(private _baseClient: BaseClient) {}

  public async create(params: {
    name: string;
    timezone: Timezone;
    metadata?: Metadata;
  }): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: "/resources",
      method: "post",
      data: params,
    });

    return this.normalizeResponse(result);
  }

  public async get(id: string): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: `/resources/${id}`,
      method: "get",
    });

    return this.normalizeResponse(result);
  }

  public async list(params: {
    page: number;
    limit: number;
    name?: string;
    status?: ResourceStatus;
  }): Promise<PaginatedResponse<Resource[]>> {
    const result = await this._baseClient.call<PaginatedResponse<Resource[]>>({
      path: `/resources`,
      method: "get",
      params,
    });

    return this.normalizeResponse(result);
  }

  public async update(
    id: string,
    params: {
      booking_disabled_before?: number;
      metadata?: Metadata;
      timezone?: Timezone;
      name?: string;
    }
  ): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: `/resources/${id}`,
      method: "patch",
      data: params,
    });

    return this.normalizeResponse(result);
  }

  public async publish(id: string): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: `/resources/${id}/publish`,
      method: "post",
    });

    return this.normalizeResponse(result);
  }

  public async convertToDraft(id: string): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: `/resources/${id}/convert-draft`,
      method: "post",
    });

    return this.normalizeResponse(result);
  }

  public async delete(id: string): Promise<Response<Record<string, never>>> {
    return this._baseClient.call({
      path: `/resources/${id}`,
      method: "delete",
    });
  }

  private normalizeResponse<R>(result: R): R {
    // @ts-ignore
    if (!result.success) {
      return result;
    }

    // @ts-ignore
    if (Array.isArray(result.data)) {
      // @ts-ignore
      result.data = result.data.map((x) => {
        if (x._object === "resource") {
          return this.normalizeResource(x);
        }

        return x;
      });

      return result;
    }

    // @ts-ignore
    if (result.data?._object === "resource") {
      // @ts-ignore
      result.data = this.normalizeResource(result.data);
      return result;
    }

    return result;
  }

  private normalizeResource(resource: Resource): Resource {
    return new Resource(
      resource._object,
      resource.id,
      resource.metadata,
      resource.name,
      resource.status,
      resource.timezone,
      resource.short_id,
      resource.num_active_bookings,
      resource.num_bookings,
      resource.num_available_slots,
      resource.num_cancelled_bookings,
      resource.num_slots,
      resource.booking_disabled_before,
      new Date(resource.updated_at),
      new Date(resource.created_at)
    );
  }
}

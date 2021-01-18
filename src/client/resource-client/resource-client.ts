import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import { Overbooked } from "./../../";

export class ResourceClient implements Overbooked.IResourceClient {
  public constructor(private _baseClient: BaseClient) {}

  public async create(
    params: Overbooked.ResourceCreateParams
  ): Promise<Response<Overbooked.Resource>> {
    const result = await this._baseClient.call<Response<Overbooked.Resource>>({
      path: "/resources",
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Overbooked.Resource>;
  }

  public async get(id: string): Promise<Response<Overbooked.Resource>> {
    const result = await this._baseClient.call<Response<Overbooked.Resource>>({
      path: `/resources/${id}`,
      method: "get",
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Overbooked.Resource>;
  }

  public async list(
    params: Overbooked.ResourceListParams
  ): Promise<PaginatedResponse<Overbooked.Resource[]>> {
    const result = await this._baseClient.call<
      PaginatedResponse<Overbooked.Resource[]>
    >({
      path: `/resources`,
      method: "get",
      params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as PaginatedResponse<Overbooked.Resource[]>;
  }

  public async update(
    id: string,
    params: Overbooked.ResourceUpdateParams
  ): Promise<Response<Overbooked.Resource>> {
    const result = await this._baseClient.call<Response<Overbooked.Resource>>({
      path: `/resources/${id}`,
      method: "patch",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Overbooked.Resource>;
  }

  public async publish(id: string): Promise<Response<Overbooked.Resource>> {
    const result = await this._baseClient.call<Response<Overbooked.Resource>>({
      path: `/resources/${id}/publish`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Overbooked.Resource>;
  }

  public async convertToDraft(
    id: string
  ): Promise<Response<Overbooked.Resource>> {
    const result = await this._baseClient.call<Response<Overbooked.Resource>>({
      path: `/resources/${id}/convert-draft`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Overbooked.Resource>;
  }

  public async delete(id: string): Promise<Response<Record<string, never>>> {
    return this._baseClient.call({
      path: `/resources/${id}`,
      method: "delete",
    });
  }
}

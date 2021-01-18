import { Resource } from "./../../model/resource";
import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import {
  IResourceClient,
  ResourceCreateParams,
  ResourceListParams,
  ResourceUpdateParams,
} from "./resource-client.interface";

export class ResourceClient implements IResourceClient {
  public constructor(private _baseClient: BaseClient) {}

  public async create(
    params: ResourceCreateParams
  ): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: "/resources",
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Resource>;
  }

  public async get(id: string): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: `/resources/${id}`,
      method: "get",
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Resource>;
  }

  public async list(
    params: ResourceListParams
  ): Promise<PaginatedResponse<Resource[]>> {
    const result = await this._baseClient.call<PaginatedResponse<Resource[]>>({
      path: `/resources`,
      method: "get",
      params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as PaginatedResponse<Resource[]>;
  }

  public async update(
    id: string,
    params: ResourceUpdateParams
  ): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: `/resources/${id}`,
      method: "patch",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Resource>;
  }

  public async publish(id: string): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: `/resources/${id}/publish`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Resource>;
  }

  public async convertToDraft(id: string): Promise<Response<Resource>> {
    const result = await this._baseClient.call<Response<Resource>>({
      path: `/resources/${id}/convert-draft`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "resource"
    ) as Response<Resource>;
  }

  public async delete(id: string): Promise<Response<Record<string, never>>> {
    return this._baseClient.call({
      path: `/resources/${id}`,
      method: "delete",
    });
  }
}

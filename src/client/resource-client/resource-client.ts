import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import { Overbooked } from "./../../";

export class ResourceClient implements Overbooked.IResourceClient {
  public constructor(private _baseClient: BaseClient) {}

  /**
   * public.resource.create
   *
   * Creates new Resource object, that can be used to create Slots and Bookings within it.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/create-a-resource
   */
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

  /**
   * public.booking.get
   *
   * Retrieves a Resource details.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/get-a-resource
   */
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

  /**
   * public.resource.list
   *
   * Returns paginated list of all Resources matched by given filters.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/list-resources
   */
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

  /**
   * public.resource.update
   *
   * Updates the specified Resource by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/update-a-resource
   */
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

  /**
   * public.resource.publish
   *
   * Changes the status from draft to published and makes all assigned Slots publicly visible.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/publish-a-resource
   */
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

  /**
   * public.resource.convertToDraft
   *
   * Reverts the status from published to draft.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/convert-a-resource-to-draft
   */
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

  /**
   * public.resource.delete
   *
   * Permanently deletes the Resource with all Slots and all Bookings within it.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/delete-a-resource
   */
  public async delete(id: string): Promise<Response<Record<string, never>>> {
    return this._baseClient.call({
      path: `/resources/${id}`,
      method: "delete",
    });
  }
}

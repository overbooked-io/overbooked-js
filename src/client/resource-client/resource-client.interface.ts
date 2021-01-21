import { Response, PaginatedResponse } from "./../shared/response";
import { Overbooked } from "./../../";

export type ResourceCreateParams = {
  name: string;
  timezone: Overbooked.Timezone;
  metadata?: Overbooked.Metadata;
};

export type ResourceListParams = {
  page: number;
  limit: number;
  name?: string;
  status?: Overbooked.ResourceStatus;
};

export type ResourceUpdateParams = {
  booking_disabled_before?: number;
  metadata?: Overbooked.Metadata;
  timezone?: Overbooked.Timezone;
  name?: string;
};
export interface IResourceClient {
  /**
   * public.resource.create
   *
   * Creates new Resource object, that can be used to create Slots and Bookings within it.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/create-a-resource
   */
  create(
    params: Overbooked.ResourceCreateParams
  ): Promise<Response<Overbooked.Resource>>;

  /**
   * public.booking.get
   *
   * Retrieves a Resource details.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/get-a-resource
   */
  get(id: string): Promise<Response<Overbooked.Resource>>;

  /**
   * public.resource.list
   *
   * Returns paginated list of all Resources matched by given filters.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/list-resources
   */
  list(
    params: Overbooked.ResourceListParams
  ): Promise<PaginatedResponse<Overbooked.Resource[]>>;

  /**
   * public.resource.update
   *
   * Updates the specified Resource by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/update-a-resource
   */
  update(
    id: string,
    params: ResourceUpdateParams
  ): Promise<Response<Overbooked.Resource>>;

  /**
   * public.resource.publish
   *
   * Changes the status from draft to published and makes all assigned Slots publicly visible.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/publish-a-resource
   */
  publish(id: string): Promise<Response<Overbooked.Resource>>;

  /**
   * public.resource.convertToDraft
   *
   * Reverts the status from published to draft.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/convert-a-resource-to-draft
   */
  convertToDraft(id: string): Promise<Response<Overbooked.Resource>>;

  /**
   * public.resource.delete
   *
   * Permanently deletes the Resource with all Slots and all Bookings within it.
   *
   * https://docs.overbooked.io/api-reference/api-resources/resource/delete-a-resource
   */
  delete(id: string): Promise<Response<Record<string, never>>>;
}

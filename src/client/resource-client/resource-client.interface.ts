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
  create(
    params: Overbooked.ResourceCreateParams
  ): Promise<Response<Overbooked.Resource>>;

  get(id: string): Promise<Response<Overbooked.Resource>>;

  list(
    params: Overbooked.ResourceListParams
  ): Promise<PaginatedResponse<Overbooked.Resource[]>>;

  update(
    id: string,
    params: ResourceUpdateParams
  ): Promise<Response<Overbooked.Resource>>;

  publish(id: string): Promise<Response<Overbooked.Resource>>;

  convertToDraft(id: string): Promise<Response<Overbooked.Resource>>;

  delete(id: string): Promise<Response<Record<string, never>>>;
}

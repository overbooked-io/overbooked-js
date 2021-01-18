import { Resource, ResourceStatus } from "./../../model/resource";
import { Metadata } from "./../../model/metadata";
import { Timezone } from "./../../model/timezone";
import { Response, PaginatedResponse } from "./../shared/response";

export type ResourceCreateParams = {
  name: string;
  timezone: Timezone;
  metadata?: Metadata;
};

export type ResourceListParams = {
  page: number;
  limit: number;
  name?: string;
  status?: ResourceStatus;
};

export type ResourceUpdateParams = {
  booking_disabled_before?: number;
  metadata?: Metadata;
  timezone?: Timezone;
  name?: string;
};
export interface IResourceClient {
  create(params: ResourceCreateParams): Promise<Response<Resource>>;

  get(id: string): Promise<Response<Resource>>;

  list(params: ResourceListParams): Promise<PaginatedResponse<Resource[]>>;

  update(id: string, params: ResourceUpdateParams): Promise<Response<Resource>>;

  publish(id: string): Promise<Response<Resource>>;

  convertToDraft(id: string): Promise<Response<Resource>>;

  delete(id: string): Promise<Response<Record<string, never>>>;
}

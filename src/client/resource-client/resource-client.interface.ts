import { Resource, ResourceStatus } from "./../../model/resource";
import { Metadata } from "./../../model/metadata";
import { Timezone } from "./../../model/timezone";
import { Response, PaginatedResponse } from "./../shared/response";

export interface IResourceClient {
  create(params: {
    name: string;
    timezone: Timezone;
    metadata?: Metadata;
  }): Promise<Response<Resource>>;

  get(id: string): Promise<Response<Resource>>;

  list(params: {
    page: number;
    limit: number;
    name?: string;
    status?: ResourceStatus;
  }): Promise<PaginatedResponse<Resource[]>>;

  update(
    id: string,
    params: {
      booking_disabled_before?: number;
      metadata?: Metadata;
      timezone?: Timezone;
      name?: string;
    }
  ): Promise<Response<Resource>>;

  publish(id: string): Promise<Response<Resource>>;

  convertToDraft(id: string): Promise<Response<Resource>>;

  delete(id: string): Promise<Response<Record<string, never>>>;
}

import { Metadata } from "./../../model/metadata";
import { Response, PaginatedResponse } from "./../shared/response";
import { Slot } from "./../../model/slot";

export type SlotCreateParams = {
  resource_id: string;
  start_date: Date;
  end_date: Date;
  capacity: number;
  lockable?: boolean;
  metadata?: Metadata;
};

export type SlotListParams = {
  page: number;
  limit: number;
  available?: boolean;
  start_date?: Date;
  end_date?: Date;
  resoure_id?: string;
};

export type SlotUpdateParams = {
  start_date?: Date;
  end_date?: Date;
  metadata?: Metadata;
  lockable?: boolean;
  capacity?: number;
};

export type SlotLockParams = {
  lock_until: Date;
  lock_key: string;
};

export type SlotUnlockParams = {
  lock_key: string;
};

export interface ISlotClient {
  create(params: SlotCreateParams): Promise<Response<Slot[]>>;
  create(params: SlotCreateParams[]): Promise<Response<Slot[]>>;

  get(id: string): Promise<Response<Slot>>;

  list(params: SlotListParams): Promise<PaginatedResponse<Slot[]>>;

  update(id: string, params: SlotUpdateParams): Promise<Response<Slot>>;

  enable(id: string): Promise<Response<Slot>>;

  disable(id: string): Promise<Response<Slot>>;

  lock(id: string, params: SlotLockParams): Promise<Response<Slot>>;

  unlock(id: string, params: SlotUnlockParams): Promise<Response<Slot>>;

  delete(id: string): Promise<Response<Record<string, never>>>;
}

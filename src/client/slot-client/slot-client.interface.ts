import { Overbooked } from "./../../";
import { Response, PaginatedResponse } from "./../shared/response";

export type SlotCreateParams = {
  resource_id: string;
  start_date: Date;
  end_date: Date;
  capacity: number;
  lockable?: boolean;
  metadata?: Overbooked.Metadata;
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
  metadata?: Overbooked.Metadata;
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
  create(
    params: Overbooked.SlotCreateParams
  ): Promise<Response<Overbooked.Slot[]>>;
  create(
    params: Overbooked.SlotCreateParams[]
  ): Promise<Response<Overbooked.Slot[]>>;

  get(id: string): Promise<Response<Overbooked.Slot>>;

  list(params: SlotListParams): Promise<PaginatedResponse<Overbooked.Slot[]>>;

  update(
    id: string,
    params: SlotUpdateParams
  ): Promise<Response<Overbooked.Slot>>;

  enable(id: string): Promise<Response<Overbooked.Slot>>;

  disable(id: string): Promise<Response<Overbooked.Slot>>;

  lock(id: string, params: SlotLockParams): Promise<Response<Overbooked.Slot>>;

  unlock(
    id: string,
    params: SlotUnlockParams
  ): Promise<Response<Overbooked.Slot>>;

  delete(id: string): Promise<Response<Record<string, never>>>;
}

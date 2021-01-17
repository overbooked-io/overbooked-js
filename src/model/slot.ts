import { Metadata } from "./metadata";

export type SlotStatus = "active" | "disabled";

export interface Slot {
  _object: "slot";
  id: string;
  available: boolean;
  resource_id: string;
  capacity: number;
  start_date: Date;
  end_date: Date;
  lockable: boolean;
  locked_until: null | Date;
  metadata: Metadata;
  num_active_bookings: number;
  num_bookings: number;
  num_cancelled_bookings: number;
  status: SlotStatus;
  created_at: Date;
  updated_at: Date;
}

import { Metadata } from "./metadata";

export type BookingStatus = "active" | "cancelled";

export interface Booking {
  _object: "booking";
  id: string;
  resource_id: string;
  metadata: Metadata;
  slot_id: string;
  status: BookingStatus;
  created_at: Date;
  updated_at: Date;
}

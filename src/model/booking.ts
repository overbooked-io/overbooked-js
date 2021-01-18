import { Metadata } from "./metadata";
import { Overbooked } from "./../";

export type BookingStatus = "active" | "cancelled";

export class Booking {
  public _object: "booking";
  public id: string;
  public resource_id: string;
  public metadata: Overbooked.Metadata;
  public slot_id: string;
  public status: Overbooked.BookingStatus;
  public updated_at: Date;
  public created_at: Date;

  public constructor(booking: Overbooked.Booking) {
    Object.assign(this, booking, {
      updated_at: new Date(this.updated_at),
      created_at: new Date(this.created_at),
    });
  }
}

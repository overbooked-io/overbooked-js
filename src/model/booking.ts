import { Metadata } from "./metadata";

export type BookingStatus = "active" | "cancelled";

export class Booking {
  public _object: "booking";
  public id: string;
  public resource_id: string;
  public metadata: Metadata;
  public slot_id: string;
  public status: BookingStatus;
  public updated_at: Date;
  public created_at: Date;

  public constructor(booking: Booking) {
    Object.assign(this, booking, {
      updated_at: new Date(this.updated_at),
      created_at: new Date(this.created_at),
    });
  }
}

import { Overbooked } from "./..";

export type SlotStatus = "active" | "disabled";

export class Slot {
  public _object: "slot";
  public id: string;
  public available: boolean;
  public resource_id: string;
  public capacity: number;
  public start_date: Date;
  public end_date: Date;
  public lockable: boolean;
  public locked_until: null | Date;
  public metadata: Overbooked.Metadata;
  public num_active_bookings: number;
  public num_bookings: number;
  public num_cancelled_bookings: number;
  public status: Overbooked.SlotStatus;
  public updated_at: Date;
  public created_at: Date;

  public constructor(slot: Overbooked.Slot) {
    Object.assign(this, slot, {
      start_date: new Date(slot.start_date),
      end_date: new Date(slot.end_date),
      locked_until: slot.locked_until ? new Date(slot.end_date) : null,
      updated_at: new Date(slot.updated_at),
      created_at: new Date(slot.created_at),
    });
  }
}

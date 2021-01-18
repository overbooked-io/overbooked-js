import { Overbooked } from "../";

export type ResourceStatus = "draft" | "published";

export class Resource {
  public _object: "resource";
  public id: string;
  public metadata: Overbooked.Metadata;
  public name: string;
  public status: Overbooked.ResourceStatus;
  public timezone: Overbooked.Timezone;
  public short_id: string;
  public num_active_bookings: number;
  public num_bookings: number;
  public num_available_slots: number;
  public num_cancelled_bookings: number;
  public num_slots: number;
  public booking_disabled_before: number;
  public updated_at: Date;
  public created_at: Date;

  public constructor(resource: Overbooked.Resource) {
    Object.assign(this, resource, {
      updated_at: new Date(resource.updated_at),
      created_at: new Date(resource.created_at),
    });
  }
}

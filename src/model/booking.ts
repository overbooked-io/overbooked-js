import { Overbooked } from "./../";

export type BookingStatus = "active" | "cancelled";

/**
 * An arrangement placed on a particular Slot.
 *
 * The Booking can be utilized as any entity you need
 * in your application. This can be a hotel room, flight,
 * or maybe an appointment. It's up to you.
 *
 * The Booking has two possible statuses: active and
 * cancelled. When the Booking is cancelled, it frees up
 * the Slot, so that other Bookings can be created on it.
 *
 * You can also use metadata property to store data that
 * refer to any entities from your system.
 *
 * https://docs.overbooked.io/api-reference/api-resources/booking
 *
 * @class Booking
 */
export class Booking {
  /**
   * Name of the object
   *
   * @type {string}
   */
  public _object: "booking";
  /**
   * Unique identifier for the Booking.
   *
   * @type {string}
   */
  public id: string;
  /**
   * Unique identifier for the Resource that Booking is assigned to.
   *
   * @type {string}
   */
  public resource_id: string;
  /**
   * Set of key-value data that you can attach to the Booking.
   * This can be useful for storing additional information
   * about the object in a structured format.
   *
   * @type {Overbooked.Metadata}
   */
  public metadata: Overbooked.Metadata;
  /**
   * Unique identifier for the Slot that Booking is assigned to.
   * @type {string}
   *
   */
  public slot_id: string;
  /**
   * The status of the Booking is either active or cancelled.
   *
   * @type {Overbooked.BookingStatus}
   */
  public status: Overbooked.BookingStatus;
  /**
   * The date at which the Booking was last updated, in UTC in ISO 8601.
   *
   * @type {Date}
   */
  public updated_at: Date;
  /**
   * The date at which the Booking was created, in UTC in ISO 8601.
   *
   * @type {Date}
   */
  public created_at: Date;

  public constructor(booking: Overbooked.Booking) {
    Object.assign(this, booking, {
      updated_at: new Date(this.updated_at),
      created_at: new Date(this.created_at),
    });
  }
}

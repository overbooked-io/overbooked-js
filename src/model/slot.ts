import { Overbooked } from "./..";

export type SlotStatus = "active" | "disabled";

/**
 * The Slot is a period of time for which Bookings can be booked.
 *
 * The Slot is a bucket for Bookings, embedded in time.
 * It has the start_date and the end_date. It has a maximum
 * capacity which defines how many Bookings can be booked
 * in a given Slot, and can have 2 statuses: active and
 * disabled. It can be also extended via metadata property
 * to store data that refer to any entities from your system.
 *
 * https://docs.overbooked.io/api-reference/api-resources/slot
 *
 * @class Slot
 */
export class Slot {
  /**
   * Name of the object
   *
   * @type {string}
   */
  public _object: "slot";

  /**
   * Unique identifier for the Slot.
   *
   * @type {string}
   */
  public id: string;

  /**
   * A flag indicating whether the Slot is available for booking.
   *
   * @type {boolean}
   */
  public available: boolean;

  /**
   * Unique identifier for the Resource that Slot is assigned to.
   *
   * @type {string}
   */
  public resource_id: string;

  /**
   * The maximum amount of active Bookings that the Slot can contain.
   *
   * @type {number}
   */
  public capacity: number;

  /**
   * The date at which the Slot begins, in UTC in ISO 8601.
   *
   * @type {Date}
   */
  public start_date: Date;

  /**
   * The date at which the Slot ends, in UTC in ISO 8601.
   *
   * @type {Date}
   */
  public end_date: Date;

  /**
   * A flag indicating whether the Slot can be locked.
   * If lockable equals false then the Slot cannot
   * be locked.
   *
   * @type {boolean}
   */
  public lockable: boolean;

  /**
   * The date to which the Slot is locked, in UTC in ISO 8601.
   *
   * @type {null | Date}
   */
  public locked_until: null | Date;

  /**
   * Set of key-value data that you can attach to the Slot.
   * This can be useful for storing additional information
   * about the object in a structured format.
   *
   * @type {Overbooked.Metadata}
   */
  public metadata: Overbooked.Metadata;

  /**
   * The number of all active Bookings booked on the Slot.
   *
   * @type {number}
   */
  public num_active_bookings: number;

  /**
   * The number of all Bookings booked on the Slot.
   *
   * @type {number}
   */
  public num_bookings: number;

  /**
   * The number of all cancelled Bookings booked on the Slot.
   *
   * @type {number}
   */
  public num_cancelled_bookings: number;

  /**
   * The status of the Slot is either active or disabled.
   * When the status is equal to disabled, then no Bookings
   * can be booked on this Slot.
   *
   * @type {Overbooked.SlotStatus}
   */
  public status: Overbooked.SlotStatus;

  /**
   * The date at which the Slot was last updated, in UTC in ISO 8601.
   *
   * @type {Date}
   */
  public updated_at: Date;

  /**
   * The date at which the Slot was created, in UTC in ISO 8601.
   *
   * @type {Date}
   */
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

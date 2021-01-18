import { Overbooked } from "../";

export type ResourceStatus = "draft" | "published";

/**
 * The Resource is a bucket for Slots and Bookings.
 * 
 * The Resource is not embedded in a time, so that is very 
 * flexible in usage. You control your booking availability 
 * by using Slots and their properties.
 * 
 * The Resource can have 2 statuses: draft and published. 
 * When the status is draft, it means that it's not visible 
 * publicly and none can create Bookings within it. You can 
 * easily publish it to make it available.
 * 
 * You can also use metadata property to store data that 
 * refer to any entities from your system.
 * 
 * https://docs.overbooked.io/api-reference/api-resources/resource
 * 
 * @class Resource
 */
export class Resource {
  /**
   * Name of the object
   * 
   * @type {string}
   */
  public _object: "resource";

  /**
   * Unique identifier for the Resource.
   * 
   * @type {string}
   */
  public id: string;

  /**
   * Set of key-value data that you can attach to a Resource. 
   * This can be useful for storing additional information 
   * about the object in a structured format.
   * 
   * @type {Overbooked.Metadata}
   */
  public metadata: Overbooked.Metadata;

  /**
   * The Resource’s name, meant to be displayable publicly.
   * 
   * @type {string}
   */
  public name: string;

  /**
   * The status of the Resource is either draft or published. 
   * When the status is equal to draft, then Slots are not 
   * available to be booked.
   * 
   * @type {Overbooked.ResourceStatus}
   */
  public status: Overbooked.ResourceStatus;

  /**
   * The output timezone for all timestamps in the Resource. 
   * A list of possible time zone values is maintained at 
   * the IANA Time Zone Database.
   * 
   * @type {Overbooked.Timezone}
   */
  public timezone: Overbooked.Timezone;

  /**
   * Short representation of the property id.
   * 
   * @type {string}
   */
  public short_id: string;

  /**
   * A number of active Bookings (with status active) 
   * booked on Slots within the Resource.
   * 
   * @type {number}
   */
  public num_active_bookings: number;

  /**
   * A number of all Bookings booked on Slots within 
   * the Resource.
   * 
   * @type {number}
   */
  public num_bookings: number;

  /**
   * A number of all available Slots (available to book) 
   * created within the Resource.
   * 
   * @type {number}
   */
  public num_available_slots: number;

  /**
   * A number of cancelled Bookings (with status cancelled) 
   * booked on Slots within the Resource.
   * 
   * @type {number}
   */
  public num_cancelled_bookings: number;

  /**
   * A number of all Slots created within the Resource.
   * 
   * @type {number}
   */
  public num_slots: number;

  /**
   * The number of seconds before the Slot starts when 
   * the booking option is disabled.
   * 
   * @type {number}
   */
  public booking_disabled_before: number;

  /**
   * The date at which the object was last updated, in UTC in ISO 8601.
   * 
   * @type {Date}
   */
  public updated_at: Date;

  /**
   * The date at which the object was created, in UTC in ISO 8601.
   * 
   * @type {Date}
   */
  public created_at: Date;

  public constructor(resource: Overbooked.Resource) {
    Object.assign(this, resource, {
      updated_at: new Date(resource.updated_at),
      created_at: new Date(resource.created_at),
    });
  }
}

import { BaseClient } from "./base-client/base-client";
import { BookingClient } from "./booking-client/booking-client";
import { IBookingClient } from "./booking-client/booking-client.interface";
import { Config } from "./config";
import { IOverbookedClient } from "./overbooked-client.interface";
import { ResourceClient } from "./resource-client/resource-client";
import { IResourceClient } from "./resource-client/resource-client.interface";
import { SlotClient } from "./slot-client/slot-client";
import { ISlotClient } from "./slot-client/slot-client.interface";

export class Overbooked implements IOverbookedClient {
  private _baseClient: BaseClient;
  public resource: IResourceClient;
  public slot: ISlotClient;
  public booking: IBookingClient;

  public constructor(config: Config) {
    this._baseClient = new BaseClient(config);
    this.resource = new ResourceClient(this._baseClient);
    this.slot = new SlotClient(this._baseClient);
    this.booking = new BookingClient(this._baseClient);
  }
}

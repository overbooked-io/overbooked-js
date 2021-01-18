import { BaseClient } from "./client/base-client/base-client";
import { BookingClient } from "./client/booking-client/booking-client";
import { IBookingClient } from "./client/booking-client/booking-client.interface";
import { IClient } from "./client/client.interface";
import { Config } from "./client/config";
import { ResourceClient } from "./client/resource-client/resource-client";
import { IResourceClient } from "./client/resource-client/resource-client.interface";
import { SlotClient } from "./client/slot-client/slot-client";
import { ISlotClient } from "./client/slot-client/slot-client.interface";

export * from "./client/booking-client/booking-client.interface";
export * from "./client/resource-client/resource-client.interface";
export * from "./client/slot-client/slot-client.interface";
export * from "./model/booking";
export * from "./model/resource";
export * from "./model/slot";
export * from "./model/metadata";
export * from "./model/timezone";

export class Client implements IClient {
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

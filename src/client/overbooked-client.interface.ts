import { IBookingClient } from "./booking-client/booking-client.interface";
import { IResourceClient } from "./resource-client/resource-client.interface";
import { ISlotClient } from "./slot-client/slot-client.interface";

export interface IOverbookedClient {
  resource: IResourceClient;
  slot: ISlotClient;
  booking: IBookingClient;
}

import { Overbooked } from "./../";

export interface IClient {
  resource: Overbooked.IResourceClient;
  slot: Overbooked.ISlotClient;
  booking: Overbooked.IBookingClient;
}

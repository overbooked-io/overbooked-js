import { BaseClient } from "./base-client/base-client";
import { Config } from "./config";
import { IOverbookedClient } from "./overbooked-client.interface";
import { ResourceClient } from "./resource-client/resource-client";

export class Overbooked implements IOverbookedClient {
  private _baseClient: BaseClient;
  public resource: ResourceClient;

  public constructor(config: Config) {
    this._baseClient = new BaseClient(config);
    this.resource = new ResourceClient(this._baseClient);
  }
}

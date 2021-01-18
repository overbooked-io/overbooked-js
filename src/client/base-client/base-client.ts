import axios, { Method } from "axios";
import { Slot } from "../../model/slot";
import { Resource } from "../../model/resource";
import { Booking } from "../../model/booking";
import { Config } from "../config";
import { Response, PaginatedResponse } from "../shared/response";

type ObjectType = "resource" | "slot" | "booking";
type ObjectClass = Resource | Slot | Booking;
export class BaseClient {
  private apiUrl = "https://api.overbooked.io";

  public constructor(private config: Config) {
    if (this.isBrowserRuntime() && !!config.secretKey) {
      console.error(
        `Overbooked: It's not safe to use a Secret Key in client-side code. Learn more: https://docs.overbooked.io/api-reference/authentication#public-key-and-secret-key`
      );
    }
  }

  public async call<R>(payload: {
    path: string;
    method: Method;
    data?: unknown;
    params?: unknown;
  }): Promise<R> {
    const apiKey = this.getApiKey();

    const { path, method, data, params } = payload;

    try {
      const result = await axios({
        method: method,
        url: `${this.apiUrl}${path}`,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        ...(data ? { data } : {}),
        ...(params ? { params } : {}),
      });

      return result.data as R;
    } catch (e) {
      return e.response.data as R;
    }
  }

  public normalizeResponse(
    result:
      | Response<ObjectClass>
      | Response<ObjectClass[]>
      | PaginatedResponse<ObjectClass[]>,
    type: ObjectType
  ):
    | Response<ObjectClass>
    | Response<ObjectClass[]>
    | PaginatedResponse<ObjectClass[]> {
    if (!result.success) {
      return result;
    }

    if (Array.isArray(result.data)) {
      result.data = (result.data as ObjectClass[]).map((x) => {
        if (x._object === type) {
          return this.normalizeObject(x, type);
        }

        return x;
      });

      return result;
    }

    if (result.data?._object === type) {
      result.data = this.normalizeObject(result.data, type);
      return result;
    }

    return result;
  }

  private normalizeObject(object: ObjectClass, type: ObjectType): ObjectClass {
    switch (type) {
      case "resource":
        return new Resource(object as Resource);
      case "slot":
        return new Slot(object as Slot);
      case "booking":
        return new Booking(object as Booking);
    }
  }

  private isBrowserRuntime() {
    return typeof window !== "undefined";
  }

  private getApiKey() {
    const apiKey = this.config.secretKey || this.config.publicKey;

    if (!apiKey) {
      console.warn("Overbooked: The API Key is not provided.");
    }

    return apiKey;
  }
}

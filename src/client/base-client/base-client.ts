import axios, { Method } from "axios";
import { Config } from "../config";

export class BaseClient {
  private apiUrl = "https://api.overbooked.io";

  public constructor(private config: Config) {}

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

  private getApiKey() {
    const apiKey = this.config.secretKey || this.config.publicKey;

    if (!apiKey) {
      console.warn("Overbooked Client: The API Key is not provided.");
    }

    return apiKey;
  }
}

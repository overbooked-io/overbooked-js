export interface Response<Data, Meta = { [key: string]: unknown }> {
  error?: {
    code: string;
    message: string;
    status: number;
  };
  data?: Data;
  meta?: Meta;
  success: boolean;
}

export type PaginatedResponse<Data> = Response<
  Data,
  { page: number; limit: number; total: number }
>;

export interface ResponseError {
  config: {
    url: string;
    baseURL: string;
  };
  data: {
    error: string;
  };
  status: number;
  statusText: string;
}

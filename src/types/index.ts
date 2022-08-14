export interface ResponseShape {
  name: string;
  url: string;
}

export interface GetResultsResponse {
  count: number;
  next: number;
  previous: number;
  results: ResponseShape[];
}

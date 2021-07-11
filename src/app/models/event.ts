export interface Event {
  timestamp?: number;
  price?: string;
  status?: string;
  snapshot?: {
    BID?: string[];
    ASK?: string[];
  }
}

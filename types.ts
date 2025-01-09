export interface DollarRate {
  id: string;
  name: string;
  sellRate: number;
  buyRate: number;
  previousSellRate: number;
  previousBuyRate: number;
  change: number;
  trend: "up" | "down" | "stable";
  status: "active" | "inactive";
  graphData: number[];
}


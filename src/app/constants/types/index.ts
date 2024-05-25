export type Column<T> = {
  key: string;
  title: string;
  subColumns?: Column<T>[];
  cellClassName?: string;
};

export interface Product {
  id: number;
  name: string;
  options: {
    size: string;
    amount: number;
  };
  active: boolean;
  createdAt: string;
}

export interface Page {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
}

export interface PricePlan {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
}

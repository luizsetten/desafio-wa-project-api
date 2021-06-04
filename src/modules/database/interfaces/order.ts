export interface IOrder {
  id: number;
  description: string;
  quantity: number;
  value: string;

  createdDate?: Date;
  updatedDate?: Date;
}

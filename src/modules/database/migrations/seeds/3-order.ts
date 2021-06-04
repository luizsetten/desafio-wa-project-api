import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IOrder } from 'modules/database/interfaces/order';

export async function seed(knex: Knex): Promise<any> {
  const orders = await knex.count().from('Order');

  if (Number(orders) > 0) return;

  for (let i = 0; i < 5; i++) {
    const order: IOrder = {
      id: i,
      description: String(i),
      value: Number(faker.commerce.price()),
      createdDate: new Date(),
      updatedDate: new Date(),
      quantity: i * 5
    };

    await knex.insert(order).into('Order');
  }
}

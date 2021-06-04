import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

import { IOrder } from '../interfaces/order';

export class Order extends Model implements IOrder {
  @ApiProperty({ type: 'integer' })
  public id: number;
  @ApiProperty({ type: 'string' })
  public description: string;
  @ApiProperty({ type: 'integer' })
  public quantity: number;
  @ApiProperty({ type: 'float' })
  public value: string;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdDate: Date;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public updatedDate: Date;

  public static get tableName(): string {
    return 'Order';
  }

  public static get virtualAttributes(): string[] {
    return ['fullName'];
  }

  public $beforeInsert(): void {
    this.createdDate = this.updatedDate = new Date();
  }

  public $beforeUpdate(): void {
    this.updatedDate = new Date();
  }

  public $formatDatabaseJson(json: any): any {
    json = Model.prototype.$formatDatabaseJson.call(this, json);
    json.roles = json.roles && json.roles.length ? json.roles.join(',') : null;
    return json;
  }

  public $parseDatabaseJson(json: any): any {
    json.roles = json.roles ? json.roles.split(',') : [];
    return Model.prototype.$formatDatabaseJson.call(this, json);
  }

  // public $formatJson(data: IUser): IUser {
  //   delete data.password;
  //   return data;
  // }
}

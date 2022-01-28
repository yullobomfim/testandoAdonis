import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SellOrders extends BaseSchema {
  protected tableName = 'sell_orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('dateString')
      table.integer('price')
      table.string('employeeId')
      table.string('costumerId')
      table.string('vehicleId')
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

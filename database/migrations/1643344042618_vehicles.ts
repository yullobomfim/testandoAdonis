import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vehicles extends BaseSchema {
  protected tableName = 'vehicles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('brand')
      table.string('model')
      table.integer('year')
      table.integer('km')
      table.string('color')
      table.string('chassis')
      table.integer('price')
      table.string('status')
       table.dateTime('created_at', { useTz: true })
       table.dateTime('updated_at', { useTz: true })
     })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ReservationOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public dateString: string

  @column()
  public totalPrice: number
  
  @column()
  public employeeId: string
  
  @column()
  public costumerId: string
  
  @column()
  public vehicleId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

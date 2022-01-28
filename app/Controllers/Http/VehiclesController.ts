import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VehiclesController {
  Route.resource('/vehicles', 'VehiclesController').apiOnly()
}

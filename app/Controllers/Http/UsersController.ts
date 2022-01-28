import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'


export default class UsersController {
  
    public async index ({ request, view }: HttpContextContract) {
      const page = request.input('page', 1)
      const limit = 10
  
      const users = await Database.from('users').paginate(page, limit)
      
      // Changes the baseURL for the pagination links
      users.baseUrl('/users')
      
      return view.render('users/index', { users })
    }
    return users
  }
  
  
  public async create({}: HttpContextContract) {


    const user = await User.create({
      email: 'yullo@gmail.com',
      password: '123',
    })
    
    console.log(user.$isPersisted) // true
    
  }
  
  
  
  
  public async store({ request}: HttpContextContract) {
    
    const data = request.only(['email', 'password'])
    const user = await User.create(data)
    
    return user
    
  }
  
  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    
    return user
    
  }

  public async edit({ request, params}: HttpContextContract) {
    const user = await User.findOrFail(params.id)


  }

  public async update({ request, params}: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    user.last_login_at = DataTime.local()

    await user
    .merge({last_login_at: DateTime.local( )})
    .save()
    
    return user
    
    
  }

  public async destroy({params}: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
  }
}

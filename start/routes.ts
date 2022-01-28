import Database from '@ioc:Adonis/Lucid/Database'
import Route from '@ioc:Adonis/Core/Route'
import UsersController from 'App/Controllers/Http/UsersController'

Route.get('/', async () => {
  return { hello: 'world' }
})



Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    const token = await auth.use('api').attempt(email, password)
    return token
  } catch {
    return response.badRequest('Invalid credentials')
  }
})







Route.get('users', async ({ request }) => {
  const limit = 10
  const page = request.input('page', 1)

  return Database
    .from('users')
    .select('*')
    .orderBy('id', 'desc')
    .paginate(page, limit)
})

    Route.get('users', 'UsersController.index')
    Route.get('user', 'UsersController.show').middleware(['auth'])
    Route.put('users', 'UsersController.update').middleware(['auth'])

    Route.get('users:/id' , 'UsersController.'index')
    Route.put('users/:id', 'UsersController.update').middleware(['auth'])
    Route.delete('users/:id', 'UsersController.delete').middleware(['auth', 'UserAdmin'])




    Route.post('users', 'UsersController.create')


Route.post('reset', 'ForgotPasswordsController.store')

Route.put('reset', 'ForgotPasswordsController.update')


Route.post('sessions', 'SessionsController.store')


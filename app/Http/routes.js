'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/newthing').render('newItem')
Route.on('/x').render('itemIndex')

/*
|--------------------------------------------------------------------------
| API routes
|--------------------------------------------------------------------------
*/

Route.post('/newItem', 'MarketController.newItem')
Route.post('/_updateItem/:id', 'MarketController.updateItem')
Route.get('/item/:id', 'MarketController.singleItem')

Route.get('/itemIndex', 'MarketController.allItem')

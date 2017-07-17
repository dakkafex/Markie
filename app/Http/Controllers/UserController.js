'use strict'
const User = use('App/Model/User')


class UserController {

    /** Querries the database for all users and turns it into JSON*/
    * index(request, response) {
        const users = yield User.all()

        const userList = {
            status: 200,
            method: 'userIndex',
            data: {
                users: users
            }
        }
        response.json(userList, { users: users })
    }

    /**Login a user on the app */
    * login(request, response) {
        const email = request.input('email')
        const password = request.input('password')
        const login = yield request.auth.attempt(email, password)

        const user = yield User.findBy('email', email)

        if (login) {
            const api = request.auth.authenticator('api')
            const token = yield api.generate(user)

            var data = {
                status: 200,
                message: 'Login successful',
                data: {
                    login_token: {
                        user_id: user.id,
                        email: email,
                        token: token.token
                    }
                }
            }

            response.json(data)
            return
        }

        response.unauthorized('Invalid credentails')
    }

    * register(request, response) {
        const postData = request._body

        delete postData.publish;
        delete postData._csrf;

        try {

            yield User.create(postData)
            const userId = yield User.query().select('id').where('email', postData.email).first()

            var data = {
                status: 200,
                method: 'User registration',
                message: 'User ' + postData.email + ' successfully registered.',
                data: {
                    registration_token: {
                        user_id: userId.id,
                        email: postData.email
                    }
                }
            }
            response.json(data)

        } catch (e) {
            var data = {
                status: 500,
                method: 'User registration',
                message: e.code
            }
            response.json(data)
        }
    }

}

module.exports = UserController

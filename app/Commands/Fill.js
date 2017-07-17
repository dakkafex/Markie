'use strict'

const Database = use('Database')
const Command = use('Command')
const User = use('App/Model/User')

class Fill extends Command {

    get signature() {
        return 'fill'
    }

    get description() {
        return 'Fills database with some default values for users and roles'
    }

    * handle(args, options) {

        const successIcon = this.icon('success')

        const user1 = yield User.create({ username: 'admin', password: 'x', email: 'nada' })

        // Manually close the DB
        Database.close()

        this.success(`${successIcon} Yummy, the DB has been fed`)
    }

}

module.exports = Fill

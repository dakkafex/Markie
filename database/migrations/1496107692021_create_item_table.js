'use strict'

const Schema = use('Schema')

class ItemsTableSchema extends Schema {

  up () {
    this.create('items', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('stock')
      table.float('price')
      table.string('atribute')
    })
  }

  down () {
    this.drop('items')
  }

}

module.exports = ItemsTableSchema

'use strict'

const Schema = use('Schema')

class ItemsTableSchema extends Schema {

  up () {
    this.table('items', (table) => {
      table.integer('sold').defaultTo(0)
      table.integer('gifted').defaultTo(0)
      table.integer('discarded').defaultTo(0)
      table.integer('creator').defaultTo(0)
    })
  }

  down () {
    this.drop('items')
  }

}

module.exports = ItemsTableSchema

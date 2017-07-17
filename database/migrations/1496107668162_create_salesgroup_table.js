'use strict'

const Schema = use('Schema')

class SalesGroupsTableSchema extends Schema {

  up () {
    this.create('sales_groups', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('sales_groups')
  }

}

module.exports = SalesGroupsTableSchema

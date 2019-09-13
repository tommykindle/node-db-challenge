
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name', 128)
        .notNullable()
      tbl.boolean('completed')
        .defaultTo(false)
        .notNullable()
    })

    .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('name', 128)
        .unique()
        .notNullable()
      tbl.text('description', 500)
    })

    .createTable('project_resources', tbl => {
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .refrences('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('resource_id')
        .unsigned()
        .refrences('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('task', tbl => {
      tbl.increments()
      tbl.string('description', 128)
        .notNullable()
      tbl.text('notes', 500)
      tbl.boolean('completed')
        .defaultTo(false)
        .notNullable()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .refrences('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')

};

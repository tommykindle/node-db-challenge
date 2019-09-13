
exports.seed = function (knex) {

  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { name: "Lawnmower " },
        { name: "Pruning Sheers" },
        { name: "Weedeater" },
        { name: "Rake" }
      ])
    })

};

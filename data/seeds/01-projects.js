
exports.seed = function (knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        { name: "Mow the yard", description: "mow the yard and make it look good" },
        { name: "Prune the trees", description: "trim any dead limbs and make the tree look good" },
        { name: "Weed eat the yard", description: "weed eat around the yard get rid of any weeds" },
        { name: "Rake the yard", description: "rake all leaves and loose grass up" }
      ])
    })
}

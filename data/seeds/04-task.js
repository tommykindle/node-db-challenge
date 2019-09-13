
exports.seed = function (knex) {


  return knex('table_name').truncate()
    .then(function () {

      return knex('table_name').insert([
        { description: 'Put gas in the lawnmower', notes: 'some notes', completed: true, project_id: 1 },
        { description: 'Start the lawnmower mow the yard', notes: 'do not miss a spot', completed: true, project_id: 1 },
        { description: 'Sharpen pruning sheers ', notes: 'do not cut yourself', completed: false, project_id: 2 },
        { description: 'Prun tree and clean up ', notes: 'put all limbs and leaves in trash', completed: false, project_id: 2 },
        { description: 'Put gas in the weedeater', notes: 'some notes here', completed: true, project_id: 3 },
        { description: 'Start weedeater weed eat around entire yard', notes: 'some notes here', completed: true, project_id: 3 },
        { description: 'Get the rake from the shed ', notes: 'some notes here', completed: true, project_id: 4 },
        { description: 'Rake all loose grass and weeds from the yard put in piles', notes: 'some notes here', completed: true, project_id: 4 }

      ]);
    });
};

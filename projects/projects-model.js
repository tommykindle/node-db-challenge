const db = require('../data/db-config')

module.exports = {
  getProjects,
  getProjectsById,
  addProjects,
  getTasks,
  addTask,
  getResource,
  addResource,
  getResourceById,
  getTasksById
}
// get projects
function getProjects() {
  return db('projects')
}
// get project by id
function getProjectsById(id) {
  return db('projects')
    .where('id', id).first()
}

//add project
function addProjects(project) {
  return db('projects').insert(project)
    .then(id => {
      return getProjectsById(id[0])
    })
}


// get task by project
function getTasks(id) {
  return db('projects as p')
    .join('task as t', 't.project_id', '=', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed')
    .where({ project_id: id })
}

//get task by id
function getTasksById(id) {
  return db('task')
    .where('id', id).first()
}

// add task
function addTask(task) {
  return db('task').insert(task)
    .then(id => {
      return getTasksById(id[0])
    })
}
// get resources
function getResource() {
  return db('resources')
}

//get resource by id

function getResourceById(id) {
  return db('resources')
    .where('id', id).first()
}

//add resource
function addResource(resource) {
  return db('resources').insert(resource)
    .then(id => {
      return getResourceById(id[0]);
    })
}

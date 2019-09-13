const express = require('express')

const dbHelpers = require('./projects-model')

const router = express.Router();

router.get('/', (req, res) => {
  dbHelpers.getProjects()
    .then(projects => {
      const displayProjects = projects.map(project => {
        return { ...project, 'completed': project.completed === 1 }
      })
      return res.json(displayProjects)
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve Projects from the server' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  dbHelpers.getProjectsById()
    .then(project => {
      if (project) {
        res.json(project)
      } else {
        res.status(400).json({ error: 'The project with the id provided does not exist' })
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve Project from the server' })
    })
})

router.post('/', (req, res) => {
  const projectBody = req.body
  dbHelpers.addProjects(projectBody)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'Failed to create the new project on the server ' })
    })
})

module.exports = router;
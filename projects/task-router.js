const express = require('express')

const dbHelpers = require('./projects-model')

const router = express.Router()


router.get('/', (req, res) => {
  dbHelpers.getTasks()
    .then(tasks => {
      const displayTasks = tasks.map(task => {
        return { ...task, 'completed': task.completed === 1 }
      })
      return res.json(displayTasks);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve tasks from the server' })
    })
})

router.post('/', (req, res) => {
  const taskBody = req.body
  dbHelpers.addTask(taskBody)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'Could not create new task in the database' })
    })
})


module.exports = router;
const express = require('express')
const helmet = require('helmet')
const projectRouter = require('./projects/project-router')
const resourceRouter = require('./projects/resource-router')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)




module.exports = server
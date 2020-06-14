require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import addFeedback from '../pages/api/add-feedback'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/add-feedback', addFeedback)

export default app

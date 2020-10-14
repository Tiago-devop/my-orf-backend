import express from 'express'
import path from 'path'

import './database/connection'

import routes from './routes'

const app = express()

app.use(express.json()) // p/ o express entender que é um json
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333)
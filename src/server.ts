import express from 'express'
import './database/connection'

import routes from './routes'

const app = express()

app.use(express.json()) // p/ o express entender que é um json
app.use(routes)

app.listen(3333)
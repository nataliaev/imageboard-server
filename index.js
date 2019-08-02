const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000

const imageRouter = require('./image/router')
const jwtRouter = require('./auth/router')
const userRouter = require('./user/router')

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(imageRouter)
app.use(jwtRouter)
app.use(userRouter)

app.listen(port, () => console.log(`Listening on: ${port}`))
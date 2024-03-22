const express = require("express")
const app = express()
const mongoose = require('mongoose')
const port = 3001
const url = "your mongocloud url here"

//middlewares
app.use(express.urlencoded({extended: true}))
app.use(require('cookie-parser')())
app.use(require('cors')())

mongoose.connect(url)
    .then(() => {
        app.listen(port)
        console.log(`App listening on port ${port}`)
    })
    .catch(e => console.log(e))

//routes
const tokenRouter = require('./Routers/tokenRouter.js')
const userRouter = require('./Routers/userRouter.js')

app.use("/token", tokenRouter)
app.use("/user", userRouter)

const express = require("express")
const app = express()
const mongoose = require('mongoose')
const port = 3000
const url = "mongodb+srv://Slached:254857Os@mysite.n8xf8lg.mongodb.net/devopsAPI"
const cookieParser = require('cookie-parser')
//middlewares
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

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

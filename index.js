require("dotenv").config();
let express = require('express')
require('./config/modelconfig')
let userRouter = require('./routes/userRoutes')

let app = express()

app.use(express.json())
app.use('/', userRouter)

app.listen(process.env.PORT, (req,res) => {
    console.log(`Server is running on port no: ${process.env.PORT}`)
})

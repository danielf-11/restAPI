require ("./db/connection")
const express = require('express')
const movieRouter = require('./routes/movie.routes')
const app = express()
const port = process.env.PORT || 5000
const userRouter = require("./routes/users.routes")

app.use(express.json())
app.use(userRouter)
app.use(movieRouter)

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)

})


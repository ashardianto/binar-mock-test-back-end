const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("db connection success"))
    .catch((err) => console.log(err))

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/products', productRoute)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on 3000")
})
const express = require('express')
require('dotenv').config()
const sequelize = require('./db')

const app = express()
const PORT = process.env.PORT || 5000

const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(5001, ()=> console.log(`Server is run on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}
start()


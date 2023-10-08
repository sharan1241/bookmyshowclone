const express = require("express")
const showsRouter = require("../routers/Shows.routes")
const bookingsRouter = require("../routers/Bookings.routes")
const API_SERVER = express()

API_SERVER.use("/shows",showsRouter)

API_SERVER.use("/bookings",bookingsRouter)

module.exports = API_SERVER
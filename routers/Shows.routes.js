const express = require("express");
const { getAShow, getAllShows, createAShow } = require("../controllers/shows.controller");

const showsRouter = express.Router()

showsRouter.get('/',getAllShows)

showsRouter.get('/:showId',getAShow)

showsRouter.post("/create",createAShow)

module.exports = showsRouter;
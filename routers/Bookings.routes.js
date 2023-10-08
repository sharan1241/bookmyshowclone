const express = require("express")

const bookingsRouter = express.Router()

bookingsRouter.get("/",(req,res,next)=>{
    return res.status(200).json({
        message:"fetched all bookings",
        data:[]
    })
})

bookingsRouter.get("/:id",(req,res,next)=>{
    return res.status(200).json({
        message:"fetched the booking",
        data:[]
    })
})

bookingsRouter.post("/create",(req,res,next)=>{
    return res.status(200).json({
        message:"booking created successfully",
    })
})

bookingsRouter.put("/update/:id",(req,res,next)=>{
    return res.status(200).json({
        message:"booking updated successfully",
    })
})

bookingsRouter.delete("/delete/:id",(req,res,next)=>{
    return res.status(200).json({
        message:"booking deleted successfully",
    })
})


module.exports = bookingsRouter
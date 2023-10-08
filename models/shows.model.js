const { default: mongoose } = require("mongoose");

const ShowSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    banners:{
        type:Array,
        required:true,
    },
    ratings:{
        maxRating:{
            type:Number,
            required:true
        },
        averageRating:{
            type:Number,
            default:0,
        },
    },
    format:{
        type:String,
        required:true
    },
    genre:{
        type:Array,
        required:true
    },
    certificate:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    languages:{
        type:Array,
        required:true,
    },
},{ timestamps:true })

const ShowsModel = mongoose.model('show',ShowSchema)

module.exports = ShowsModel
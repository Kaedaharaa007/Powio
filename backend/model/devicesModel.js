import mongoose from "mongoose";

const schema = new mongoose.Schema({
    
    deviceId:{
        type: String,
        required: true,
        unique: true
    },

    name:{
        type: String,
        required: true
    },

    status:{
        type: Boolean,
        default: false
    },

    usage:{
        type: Number,
        default: 0
    },

    location:{
        type: String
    },

},{ timestamps:true });

export default mongoose.model("Device", schema);
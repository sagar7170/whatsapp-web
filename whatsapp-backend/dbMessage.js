import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timesStamp: String,
    received: Boolean
})

export default mongoose.model('messageContent',whatsappSchema);
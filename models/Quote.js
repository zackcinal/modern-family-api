import mongoose from "mongoose"

const Schema = mongoose.Schema

let QuotesSchema = new Schema({
    quote: String,
    saidBy: String
})

export default mongoose.model("Quotes", QuotesSchema)
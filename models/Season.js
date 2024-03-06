import mongoose from "mongoose"

const Schema = mongoose.Schema

let SeasonSchema = new Schema({
    season: Number,
    startDate: String,
    endDate: String,
    episodes: Number,
    overview: String
})

export default mongoose.model("Seasons", SeasonSchema)
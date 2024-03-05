import mongoose from "mongoose"

const Schema = mongoose.Schema

let CharacterSchema = new Schema({
    fullName: String,
    aliases: String,
    gender: String,
    occupation: [String],
    family: [String],
    dateOfBirth: String,
    actor: String,
    picture: String
})

export default mongoose.model("characters", CharacterSchema)
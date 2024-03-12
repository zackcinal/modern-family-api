import mongoose from 'mongoose'

connectionString = process.env.DB_URL || 'mongodb://localhost:27017/modernfamily'

mongoose.connect(connectionString)

mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error", error))

export default mongoose.connection 
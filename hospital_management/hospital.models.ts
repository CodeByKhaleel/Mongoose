import mongoose from "mongoose"

const hospitalSchema = new mongoose.schema({},{})

export const Hospital = mongoose.model(
  "Hospital",
  hospitalSchema
)
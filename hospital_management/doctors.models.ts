import mongoose from "mongoose"

const doctorsSchema = new mongoose.schema({},{})

export const Doctor = mongoose.model(
  "Doctor",
  doctorsSchema
)
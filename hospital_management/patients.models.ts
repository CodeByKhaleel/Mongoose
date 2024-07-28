import mongoose from "mongoose"

const patientSchema = new mongoose.schema({},{})

export const Patient = mongoose.model(
  "Patient",
  patientSchema
)
import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.schema({},{})

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
)
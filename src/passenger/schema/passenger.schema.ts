import * as mongoose from 'mongoose';

export const PassengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
// Validar que el correo sea único y no se repita
PassengerSchema.index({ email: 1 }, { unique: true });

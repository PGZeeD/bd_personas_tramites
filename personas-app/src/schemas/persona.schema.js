/** @format */

import mongoose from 'mongoose';

const { Schema } = mongoose;

const personaSchema = new Schema({
  nombre: { type: String, require: true },
  apellido: { type: String, require: true },
  dni: { type: String, unique: true, require: true },
  edad: { type: Number, unique: true, requiere: true },
  email: { type: String, requiere: true },
});

export default mongoose.model('persona', personaSchema);

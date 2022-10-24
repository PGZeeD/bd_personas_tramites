/** @format */

import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const tramiteSchema = new Schema({
  descripcion: { type: String, require: true },
  fecha: { type: Date, default: Date.now },
  estado: { type: Boolean, unique: true, require: true },
  autor: { type: Schema.Types.ObjectId, ref: 'persona' },
});

export default mongoose.model('formality', tramiteSchema);

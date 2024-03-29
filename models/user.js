import mongoose from "mongoose";

// define schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

// difine Model

export const User = mongoose.model("User", userSchema);

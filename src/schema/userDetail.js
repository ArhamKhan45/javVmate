import mongoose from "mongoose";

const schema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: [4, "Name is too short"],
    maxlength: [28, "Name is too long"],
    trim: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// mongoose.models = {};

// export const userDetail = mongoose.model("Userdetails", schema);

export const userDetail =
  mongoose.models.Userdetails || mongoose.model("Userdetails", schema);

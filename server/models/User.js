const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PASSWORD_PATTERN = /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}/;
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\“]+(\.[^<>()\[\]\.,;:\s@\“]+)*)|(\“.+\“))@(([^<>()[\]\.,;:\s@\“]+\.)+[^<>()[\]\.,;:\s@\“]{2,})$/i;

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: {
      type: String,
      required: true
      // match: [PASSWORD_PATTERN, "this is not a correct password"]
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true
      // match: [EMAIL_PATTERN, "this is not a correct email"]
    },
    firstLogin: { type: Boolean, default: true },
    googleID: String,
    facebookID: String,
    validationCode: { type: String },
    tasksId: { type : Schema.Types.ObjectId, ref: 'Tasks' },
    tasks: []
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

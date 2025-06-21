const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email format'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    role: {
      type: String,
      enum: ['disabled', 'volunteer', 'organization', 'admin'],
      default: 'disabled',
    },
    goal: {
      type: String,
      trim: true,
      maxlength: 500,
      default: '',
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

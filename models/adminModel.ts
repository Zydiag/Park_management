import mongoose, { Schema, Types, model } from 'mongoose';
import { hash } from 'bcrypt';
const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    park_added:{
      type:Types.ObjectId,
      ref:"Park"
    }
  },
  {
    timestamps: true,
  }
);
schema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await hash(this.password, 10);
});
export const Admin = mongoose.models.Admin || model('Admin', schema);

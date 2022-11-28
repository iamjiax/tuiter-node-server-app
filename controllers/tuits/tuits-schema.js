import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  topic: String,
  userName: String,
  handle: String,
  time: String,
  image: String,
  title: String,
  tuit: String,
  likes: Number,
  disliked: Boolean,
  dislikes: Number,
  replies: Number,
  retuits: Number,
  liked: Boolean
}, {collection: 'tuits'});

export default schema;

import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

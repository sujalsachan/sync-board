import mongoose, { Schema } from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "List title is required"],
    trim: true,
  },

  boardId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
    required: [true, "BoardId is required"],
    trim: true,
  },

  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const List = mongoose.model("List", listSchema);

export default List;

import mongoose from "mongoose";

import List from "../models/list.model.js";

export async function getLists(req, res) {
  const id = req.params.id;

  if (!id) {
    throw new Error("boardId not found");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid Board ID format. Must be a 24-character hex string.",
    });
  }

  try {
    const lists = await List.find({
      boardId: id,
    });

    res.status(200).send(lists);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

export async function deleteList(req, res) {
  const {boardId, listId } = req.body;

  try {
    const deletedList = await List.deleteOne({
      _id : listId
    });
  } catch(err) {
    console.log(err);
  }
}

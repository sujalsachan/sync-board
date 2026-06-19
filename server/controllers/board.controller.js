import Board from "../models/boards.model.js";

export async function addBoard(req, res) {

  try {
    if (!req.body.title) {
      throw new Error("Title is required");
    }

    const newBoard = {
      title: req.body.title,
      lists: [],
      owner: req.body.userId,
      collaborators: [req.body.userId],
    };

    const savedBoard = await Board.create(newBoard);

    res.status(201).send({
      message: "Board inserted",
      newBoard: savedBoard  ,
    });
  } catch (err) {
    res.status(400).send({message: err.message});
  }
}

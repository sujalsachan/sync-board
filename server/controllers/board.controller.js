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

export async function getAllBoards(req, res) {
  
  const userId = req.params.id;
  
  if(!userId) {
    res.status(400).send({message : 'User Id required to fetch boards'});
  }
  
  try {
    const boards = await Board.find({
      owner : userId
    });
    
    res.status(200).send({boards});
    
  } catch (err) {
    res.status(400).send({message : 'Failed to fetch boards'});
  }
}

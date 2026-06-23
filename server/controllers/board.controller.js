import Board from "../models/board.model.js";
import List from "../models/list.model.js";

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

export async function addList(req, res) {
  try {

    const newList = {
      ...req.body,
      tasks : [],
    };
    
    const createdList = await List.create(newList);

    res.status(201).send({
      createdList
    });
    
  } catch (err) {
    res.status(400).send({
      message : 'Failed to insert list : ', err
    })
  }
}

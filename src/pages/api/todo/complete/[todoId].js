import Todo from "@/server/models/todo";
import dbConnect from "@/server/utils/dbConnect";

export default async function handler(req, res) {
    dbConnect();
    const { method, query } = req;
    if (method === "PUT") {
      const todo= await Todo.findById(query.todoId);
      todo.isCompleted=!todo.isCompleted;
      await todo.save();
      const todos=await Todo.find({});
      return res.status(200).json({message:"Done !!",todos}); 
    }
  }
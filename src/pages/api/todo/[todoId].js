import Todo from "@/server/models/todo";

export default async function handler(req, res) {
  const { method, query } = req;
  if (method === "DELETE") {
    const { todoId } = query;
    await Todo.findByIdAndDelete(todoId);
    const todos = await Todo.find({});
    return res.status(200).json({ message: "todo successfuly deleted", todos });
  } else if (method === "GET") {
    const todo = getOneTodo(query);
    return res.status(200).json({ message: "todo Loaded", todo });
  } else if (method === "PUT") {
    const todo= await Todo.findById(query.todoId);
    const {body}=req;
    todo.title=body.todo.title;
    todo.desc=body.todo.desc;
    todo.isCompleted=body.todo.isCompleted;
    await todo.save();
    const todos=await Todo.find({});
    return res.status(200).json({message:"todo successfuly updated",todos}); 
  }
}
export async function getOneTodo(query) {
  const todo = await Todo.findById(query.todoId);
  return todo;
}

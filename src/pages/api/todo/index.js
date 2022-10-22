import Todo from "@/server/models/todo";
import dbConnect from "@/server/utils/dbConnect";
dbConnect();

export default async function handler(req, res) {
  console.log(dbConnect());
  const { method, body } = req;

  if (method === "POST") {
    const { formData } = body;
    await Todo.create({
      title: formData.title,
      desc: formData.desc,
    });
    const todos = await Todo.find({});
    return res.status(201).json({ message: "new todos added", todos });
  } else if (method === "GET") {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  }
}

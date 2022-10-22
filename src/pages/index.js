import axios from "axios";
import { useState } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import Todo from "@/server/models/todo";
import Layout from "src/container/Layout";
import dbConnect from "@/server/utils/dbConnect";

export default function Home({ todos }) {
  const [data, setData] = useState(todos);

  const deleteTodos = (id) => {
    axios
      .delete(`api/todo/${id}`)
      .then(({ data }) => {
        setData(data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewTodo = (e, formData) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post(`api/todo/`, { formData })
      .then((res) => {
        console.log(res.data), "addtodo log res data";
        setData(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <TodoForm onAdd={addNewTodo} />
      <TodoList data={data} onDelete={deleteTodos} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  dbConnect();
  const todos = await Todo.find({});
  console.log("todos ", todos);
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}

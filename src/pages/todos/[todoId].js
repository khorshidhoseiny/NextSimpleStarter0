import { useState } from "react";
import { getOneTodo } from "@/api/todo/[todoId]";
import dbConnect from "@/server/utils/dbConnect";

const TodoDetails = ({ todo }) => {
  const [value, setValue] = useState({ title: "", desc: "" });
  const ChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <p>edit Todo page</p>
      <h2>Title:{todo.title}</h2>
      <h2> description: {todo.desc}</h2>
    </div>
  );
};

export default TodoDetails;

export async function getServerSideProps(context) {
  dbConnect();
  const { query } = context;
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

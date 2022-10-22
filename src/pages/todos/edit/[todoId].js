import axios from "axios";
import { useRouter } from "next/router";
import { getOneTodo } from "@/api/todo/[todoId]";
import dbConnect from "@/server/utils/dbConnect";

const EditTodo = ({ todo }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: todo.title,
    desc: todo.description,
  });

  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefualt();
    axios
      .put(`api/todo/${router.query.todoId}`, { todo: formData })
      .then(() => router.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="w-3/4 flex justify-center items-center my-4"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col mx-3 py-3 bg-white rounded-md w-full  ">
        <div className="flex flex-col justify-center items-center  mb-5">
          <label className="text-blue-500 font-semibold flex justify-start mb-2 w-3/4 ">
            Title :
          </label>
          <input
            className="border p-2 rounded-md w-3/4 border-gray-300"
            type="text"
            value={formData.title}
            name="title"
            onChange={ChangeHandler}
          />
        </div>
        <div className="flex flex-col justify-center items-center mb-5">
          <label className="text-blue-500 font-semibold flex justify-start mb-2 w-3/4 ">
            description :
          </label>
          <input
            className="border p-2 rounded-md w-3/4 border-gray-300"
            type="text"
            name="desc"
            value={formData.desc}
            onChange={ChangeHandler}
          />
        </div>
        <div className="flex justify-center mt-3 items-center">
          <button
            onClick={() => router.push("/")}
            className="bg-white border border-gray-400 rounded-md text-gray-500 p-2 w-24"
          >
            Back
          </button>
          <button className=" rounded-md text-white bg-blue-500 p-2 ml-4 w-24">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditTodo;

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

import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [value, setValue] = useState({ title: "", desc: "" });
  const [isShow, setIsShow] = useState(false);

  const ChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex mt-10 justify-center items-center">
      
        {isShow ? (
            <form
            className="w-3/4 flex justify-center items-center my-4"
            onSubmit={(e) => onAdd(e, value)}
          >
          <div className="flex flex-col mx-3 py-3 bg-white rounded-md w-full  ">
            <div className="flex flex-col justify-center items-center  mb-5">
              <label className="text-blue-500 font-semibold flex justify-start mb-2 w-3/4 ">
                Title :
              </label>
              <input
                className="border p-2 rounded-md w-3/4 border-gray-300"
                type="text"
                value={value.title}
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
                value={value.desc}
                onChange={ChangeHandler}
              />
            </div>
            <div className="flex justify-center mt-3 items-center ">
              <button
                onClick={() => setIsShow(false)}
                className="bg-white border border-gray-400 rounded-md text-gray-500 p-2 w-24"
              >
                Cancel
              </button>
              <button className=" rounded-md text-white bg-blue-500 p-2 ml-4 w-24">
                Add
              </button>
            </div>
          </div>
          </form>
        ) : (
          <button
            onClick={() => setIsShow(true)}
            className="bg-blue-500 text-white p-2 rounded-md font-semibold w-36 flex justify-center items-center"
          >
            Add Todo
          </button>
        )}
      
    </div>
  );
};

export default TodoForm;

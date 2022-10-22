import Link from "next/link";

const TodoList = ({ data, onDelete }) => {
  return (
    <section className="flex justify-center flex-col items-center mt-8">
      {data.map((t) => {
        console.log(t);
        return (
          <div
            key={t._id}
            className="p-2  w-3/4 flex justify-between bg-white items-center m-2 rounded-md border border-gray-500 "
          >
            <Link href={`/todos/${t._id}`}>
              <a>
                <div>
                  <p className="font-bold">{t.title}</p>
                  <p className="ml-2 text-gray-600">{t.desc}</p>
                </div>
              </a>
            </Link>

            <div className="mx-3 p-1 flex justify-between">
              <button
                onClick={() => onDelete(t._id)}
                className="text-red-500 mx-3 "
              >
                delete
              </button>
              <button className="text-green-500 mx-3">complete</button>
              <Link href={`/todos/edit/${t._id}`}>
                <a className="text-blue-500 mx-3">edit</a>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TodoList;

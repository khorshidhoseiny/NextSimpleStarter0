import Link from "next/link";
import {
  TrashIcon,
  CheckIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const TodoList = ({ data, onDelete, onComplete }) => {
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
                  <p
                    className={
                      t.isCompleted ? "line-through font-bold" : "font-bold"
                    }
                  >
                    {t.title}
                  </p>
                  <p className={t.isCompleted ? "line-through " : ""}>
                    {t.desc}
                  </p>
                </div>
              </a>
            </Link>

            <div className="mx-5 p-1 flex justify-center items-center">
              <TrashIcon
                onClick={() => onDelete(t._id)}
                className="stroke-red-500 w-6"
              />
              <button onClick={() => onComplete(t._id)} className="">
                {!t.isCompleted ? (
                  <span className="rounded-full border border-slate-600 flex justify-center items-center mx-3 h-5 w-5"></span>
                ) : (
                  <CheckIcon className="stroke-green-500 mx-2 w-6" />
                )}
              </button>

              <Link href={`/todos/edit/${t._id}`}>
                <a>
                  <PencilSquareIcon className="stroke-blue-500 w-6" />
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TodoList;

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <section className="flex justify-between w-full px-3 items-center h-12 p-1 shadow-md bg-white text-bold text-gray-500">
      <h1 className="">todolist | NextJs</h1>
      <nav className="flex justify-end ">
        <ul className="w-full flex pr-3 ">
          <li className="mx-1">
            <Link href={"/"}>
              <a >Home</a>
            </Link>
          </li>
          <li className="mx-1">
            <Link href={"/Profile"}>
            <a>
              Profile
            </a>
            </Link>
          </li>
          <li className="mx-1">
            <Link href={"/Protected-ssr"}>
            <a>
              Protected-ssr
            </a>
            </Link>
          </li>
          <li className="mx-1">
            {!session && status !== "loading" && (
              <button  onClick={() => signIn()}>
                Sign In
              </button>
            )}
          </li>
          <li className="mx-1">
            {session && (
              <button  onClick={() => signOut()}>
                Sign Out
              </button>
            )}
          </li>

        </ul>
      </nav>
    </section>
  );
};

export default Header;

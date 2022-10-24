import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  
  return (
    <section className="flex justify-between w-full px-3 items-center h-12 p-1 shadow-md bg-white text-bold text-gray-500">
      <h1 className="">todolist | NextJs</h1>
      <nav className="flex justify-between ">
        <Link href={"/"}>
          <a className="mx-2">Home</a>
        </Link>
        {!session && status !== "loading" && (
          <button className="mx-2" onClick={() => signIn()}>
            Sign In
          </button>
        )}
        {session && (
          <button className="mx-2" onClick={() => signOut()}>
            Sign Out
          </button>
        )}
      </nav>
    </section>
  );
};

export default Header;

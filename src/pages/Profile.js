import { signIn, useSession } from "next-auth/react";
import Layout from "src/container/Layout";

const Profile = () => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  if (status === "loading") {
    return (
      <Layout>
      <div>
        <h1>loading...</h1>
      </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1 className="flex justify-center">dear<p className="font-semibold mx-2">{session.user.name} </p>  welcome to profile Page</h1>
    </Layout>
  );
};

export default Profile;

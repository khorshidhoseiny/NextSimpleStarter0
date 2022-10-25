import { getSession, useSession } from "next-auth/react";
import Layout from "src/container/Layout";

const ProtectedSSR = () => {
  const { data: session, status } = useSession();
  
  return (
    <Layout>
      <h1>Protected ssr page </h1>
    </Layout>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/Protected-ssr",
        parmanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

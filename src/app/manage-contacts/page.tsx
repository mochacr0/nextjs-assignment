import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

const ManageContactsPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  } else {
    console.log(session);
  }
  return <div>{`Hello`}</div>;
};

export default ManageContactsPage;

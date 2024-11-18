import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import { ContactModel } from "@/models/contactModel";

const ManageContactsPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const contacts: ContactModel[] = [];
  try {
    const getContactsResponse = await fetch(
      `${process.env.BASE_API_URL}/contacts`
    );
    const getContactsJson = await getContactsResponse.json();
    contacts.push(...getContactsJson.items);
  } catch (error) {
    console.log("Failed to get contacts", error);
  }

  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <h2>Manage Contacts</h2>
          {contacts.length > 0 ? (
            <div className="contact-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th className="message-column">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr key={contact.id}>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.website}</td>
                      <td className="message-column">{contact.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h4>No Contacts Found</h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManageContactsPage;

import { promises as asyncFs } from "fs";
import { ContactModel } from "@/models/contactModel";

const FILE_PATH = process.cwd() + "/src/database/contacts/contacts.json";

const readContactsFromFile = async (): Promise<ContactModel[]> => {
  const fileData = await asyncFs.readFile(FILE_PATH, "utf-8");
  const contacts: ContactModel[] = JSON.parse(fileData);
  return contacts;
};

const writeContactsToFile = async (contacts: ContactModel[]): Promise<void> => {
  await asyncFs.writeFile(FILE_PATH, JSON.stringify(contacts, null, 2));
};

const addContact = async (contact: ContactModel): Promise<ContactModel> => {
  const contacts = await readContactsFromFile();
  contacts.push(contact);
  writeContactsToFile(contacts);
  return contact;
};

const contactService = {
  readContacts: readContactsFromFile,
  addContact,
};

export default contactService;

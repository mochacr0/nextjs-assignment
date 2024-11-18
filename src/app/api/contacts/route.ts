import contactService from "@/database/contacts/contactService";
import { AddContactModel, ContactModel } from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const GET = async (request: NextRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const contacts = await contactService.readContacts();
  return NextResponse.json({
    items: contacts,
  });
};

export const POST = async (request: NextRequest) => {
  const addContactRequest: AddContactModel = await request.json();

  const newContact: ContactModel = {
    ...addContactRequest,
    id: uuidv4().toString(),
    createdAt: new Date().toISOString(),
  };

  const addedContact = await contactService.addContact(newContact);

  return NextResponse.json({
    message: "Contact added successfully",
    data: addedContact,
  });
};

export type ContactModel = {
  id: string;
  name: string;
  email: string;
  website: string;
  message: string;
  createdAt: string;
};

export type AddContactModel = {
  name: string;
  email: string;
  website: string;
  message: string;
};

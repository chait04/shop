import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    // hasing password that we are going to dave in db
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Jane patil",
    email: "jane@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
];

export default users;

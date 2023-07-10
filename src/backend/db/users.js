import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    name: "Adarsh Balika",
    email: "adarshbalak@gmail.com",
    username: "adarshbalika",
    password: "adarshBalika123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://cdn-icons-png.flaticon.com/128/1661/1661081.png",
    bio: "Adarsh Balika, the web developer.",
    link: "https://github.com/SahariBagothula",
  },
  {
    _id: uuid(),
    name: "Chandana",
    email: "chandana@gmail.com",
    username: "chandana",
    password: "chandana123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://cdn-icons-png.flaticon.com/128/8164/8164588.png",
    bio: "Dyslexic, minimalist, loves conde3nsed milk!",
    link: "https://github.com/SahariBagothula",
  },
  {
    _id: uuid(),
    name: "Suhas Bagothula",
    email: "suhas@gmail.com",
    username: "suhas",
    password: "suhas123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://cdn-icons-png.flaticon.com/128/145/145867.png",
    bio: "Currently dreaming",
    link: "https://github.com/SahariBagothula",
  },

  {
    _id: uuid(),
    name: "Sahari Bagothula",
    email: "sahari@gmail.com",
    username: "sahari",
    password: "sahari123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://cdn-icons-png.flaticon.com/128/10359/10359390.png",
    bio: "Fashion | Lifestyle | Photography",
    link: "https://github.com/SahariBagothula",
  },
  {
    _id: uuid(),
    name: "Sanjana Singh",
    email: "sanjana@gmail.com",
    username: "sanjana",
    password: "sanjana123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://cdn-icons-png.flaticon.com/128/949/949561.png",
    bio: "YouTuber | Blogger | Actor | Mess-er-up-er",
    link: "https://github.com/SahariBagothula",
  },
];
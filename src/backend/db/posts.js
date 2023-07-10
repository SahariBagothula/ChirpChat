// 1. map over posts array, 
// 2. pass username into a function
// 3. match that passed username with the username of every user in users array.
// 4. Store that single object and return.

import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "To know how much there is to know is the beginning of learning to live.",
    likes: {
      likeCount: 90,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4KLb3MFEGtyN4OQYYR4qeOgBIsbgBVGeDiPnltBc1c6TUkK_LiVlaDOWmuT9b0BK7do&usqp=CAU",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Success is getting what you want, happiness is wanting what you get.",
    likes: {
      likeCount: 67,
      likedBy: [],
      dislikedBy: [],
    },
    username: "chandana",
    postImage: "https://plus.unsplash.com/premium_photo-1679243792932-a61ec3aeb2a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    createdAt: new Date("August 23, 2001 02:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I never dreamed about success. I worked for it.",
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sanjana",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPY9rfXIXP2M_a306Zv4s5Ou0LI2MdtmTjW6Yx_7WzdU7NasNSQdPvilbp44rjGWvMcQ&usqp=CAU",
    createdAt: new Date("August 03, 2022 02:05:04"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Success usually comes to those who are busy looking for it.",
    likes: {
      likeCount: 3894,
      likedBy: [],
      dislikedBy: [],
    },
    username: "chandana",
    postImage: "https://thumbs.dreamstime.com/z/start-clear-objectives-blank-sheet-paper-red-paper-clip-word-ideas-crumpled-paper-wads-start-clear-objectives-224106582.jpg",
    createdAt: new Date("July 12, 2021 03:15:30"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "I am Iron man.",
    likes: {
      likeCount: 899,
      likedBy: [],
      dislikedBy: [],
    },
    username: "suhas",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93Pi2c1pYPFzJYPKYQCXvwbMPx6ppQpaUKgvLerPGyEFRg9o7pezJJR8yrSLrZ7KklTc&usqp=CAU",
    createdAt: new Date("Jun 20, 2022 07:05:30"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "The road to success and road to failure are almost exactly the same.",
    likes: {
      likeCount: 90,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sahari",
    postImage: "https://media.istockphoto.com/id/1362703262/photo/notebook-with-phrase-lets-get-started-and-keyboard-on-white-table.jpg?s=612x612&w=0&k=20&c=4WraVXA4x4YNkA4gUF9vOsX6k7GernRGM6XSuTz-XaM=",
    createdAt: new Date("December 28, 2022 01:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "It is better to change in originality than to succeed in imagination.",
    likes: {
      likeCount: 78,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sanjana",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGNhNPGX9K66QaHQ8gTrGM9OJj2Nl9cr8k1-b7nPwRrfj84oCwB6DXvif2rBNwmxrsho&usqp=CAU",
    createdAt: new Date("June 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "When you change your toughts remember to also chnage your world.",
    likes: {
      likeCount: 62,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sahari",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcsSazYck89izC2iquF_K6Mh0bvNnDJWy_Dp6rPW23CsPtqNt1yDiTYKACjU1xzokQfo&usqp=CAU",
    createdAt: new Date("November 20, 2022 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Don't let yesterday take too much of today.",
    likes: {
      likeCount: 900,
      likedBy: [],
      dislikedBy: [],
    },
    username: "suhas",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfA6V_hjLSCEkTm_TwZy7_QdAmgzd_Dyx3yzidV1cYrjhw6BKzW2kFbnHKqm8aZH6OAQ&usqp=CAU",
    createdAt: new Date("February 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "It is never too late to start again.",
    likes: {
      likeCount: 450,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2DLQnE-9OZBpxhfVaq1hgSbi6JWLsHLAaliWdeNLVSpf8crhBiLBSQcQbfrUlKcRy7s&usqp=CAU",
    createdAt: new Date("May 30, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
];
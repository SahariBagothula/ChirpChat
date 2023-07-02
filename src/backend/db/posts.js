import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: 101,
    content:
      "It's never too late to start and take control of your life",
      mediaURL: "",
      likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 201,
        username: "paulsmith",
        text: "Yes, that is true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "saharibagothula",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 102,
    content:
      "Every day is a chance to get better don't waste it",
      mediaURL: "",
      likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "gaurgopaldas",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 103,
    content:
      "Push yourself because no one else is going to do it for you",
      mediaURL: "",
      likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 203,
        username: "jayshetty",
        text: "Yes, that is true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "paulsmith",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 104,
    content:
      "There is no excuse for not trying",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "saharibagothula",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 105,
    content:
      "Be there for others, but never leave yourself behind",
      mediaURL: "",
      likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 205,
        username: "gaurgopaldas",
        text: "Yes, that is true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: 205,
        username: "paulsmith",
        text: "That's true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "saharibagothula",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 106,
    content:
      "The harder you work the better you get",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "saharibagothula",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 107,
    content:
      "Believe in yourself and anything is possible",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "saharibagothula",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 108,
    content:
      "Do the best you can until you know better. Then when you know better do better",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "saharibagothula",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 109,
    content:
      "If you are always trying to be normal you will never know how amazing you can be",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 209,
        username: "selenawilliams",
        text: "Yes, that is true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "saharibagothula",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 110,
    content:
      "Fear kills more dreams than failure ever will",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 210,
        username: "paulsmith",
        text: "Yes, that is true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "alexmaxwell",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 111,
    content:
      "Start from where you can",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: 210,
        username: "saharibagothula",
        text: "Yes, that is true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "selenawilliams",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 112,
    content:
      "Fear kills more dreams than failure ever will",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "saharibagothula",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 113,
    content:
      "Don't wait for the right time to start",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jayshetty",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 114,
    content:
      "You don't have to be great to start, but you have to start to be great",
      mediaURL: "",
      likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "alexmaxwell",
    createdAt: "2023-02-10T10:55:07+05:30",
    updatedAt: formatDate(),
  }
];


// 1. map over posts array, 
// 2. pass username into a function
// 3. match that passed username with the username of every user in users array.
// 4. Store that single object and return.
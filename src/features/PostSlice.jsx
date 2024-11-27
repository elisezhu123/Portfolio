// This file will contain the slice for the posts. This is where we will define the state and the reducers for the posts.
import { createSlice, nanoid} from "@reduxjs/toolkit"; // import createSlice  and nanoid from redux toolkit
import { sub } from "date-fns"; // import the sub function from date-fns

// Define the initial state for the posts
const initialState = [
    { id : 1, 
      title: "Clean and Modern Design", 
      content: "The portfolio website showcases a clean and modern design, making it easy for visitors to navigate through different sections. The use of interactive elements, such as hover effects and smooth transitions, adds a professional touch while maintaining a user-friendly interface.",
      date: sub(new Date(), { minutes: 20 }).toISOString(), // create a date for the post
      userId: "1", // add a userId to the post
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
            wow: 0,
            heart: 3,
            coffee: 0
      },
      image: null,
    },

    { id : 2, 
      title: "Good Showcase of Projects", 
      content: "The projects section effectively highlights key accomplishments with concise descriptions, engaging visuals, and clear links to live demos or repositories. The inclusion of a dedicated 'About Me' section with a personal touch provides insight into the creator's journey and skills.",
      date: sub(new Date(), { hours: 1 }).toISOString(), // create a date for the post
      userId: "2",
        reactions: {
            thumbsUp: 2,
            thumbsDown: 0,
            wow: 0,
            heart: 0,
            coffee: 0
      },
      image: null,
    },

    { id : 3, 
      title: "Responsive and Mobile-Friendly", 
      content: "The portfolio seamlessly adapts to various screen sizes, ensuring a smooth and engaging user experience on both desktop and mobile devices. This responsive approach highlights the creator’s attention to detail and technical proficiency.",
      date: sub(new Date(), { hours: 2 }).toISOString(), // create a date for the post
      userId: "3",
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
            wow: 0,
            heart: 0,
            coffee: 5
      },
      image: null,
    },

    { id : 4, 
      title: "Visually Compelling Experience", 
      content: "The website leverages high-quality visuals and consistent typography to enhance readability and aesthetic appeal. The balance between content and imagery creates a visually compelling experience for visitors.",
      date: sub(new Date(), { minutes: 45 }).toISOString(), // create a date for the post
      userId: "4",
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
            wow: 0,
            heart: 0,
            coffee: 5
      },
      image: null,
    },

    { id : 5,
      title: "Responsive Design",
      content: "The portfolio website is designed with a responsive layout that adapts to different screen sizes and devices. This ensures a consistent and user-friendly experience for visitors, regardless of the device they are using.",
      date: sub(new Date(), { minutes: 30 }).toISOString(), // create a date for the post
      userId: "5",
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
            wow: 0,
            heart: 0,
            coffee: 2
      },
      image: null,
    },

    { id : 6,
      title: "Clean and Minimalistic Design",
      content: "The website features a clean and minimalistic design that focuses on simplicity and clarity. This approach helps to reduce visual clutter and ensures that the content takes center stage, making it easy for visitors to navigate and engage with the portfolio.",
      date: sub(new Date(), { hours: 10 }).toISOString(), // create a date for the post
      userId: "1",
        reactions: {
            thumbsUp: 2,
            thumbsDown: 0,
            wow: 0,
            heart: 0,
            coffee: 0
      },
      image: null,
    },

    { id : 7,
      title: "Engaging User Experience",
      content: "The portfolio website provides an engaging user experience through interactive elements, smooth animations, and intuitive navigation. These features create a dynamic and immersive experience for visitors, encouraging them to explore the site further.",
      date: sub(new Date(), { minutes: 5 }).toISOString(), // create a date for the post
      userId: "2",
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
            wow: 0,
            heart: 0,
            coffee: 0
      },
      image: null,
    },

    { id : 8,   
      title: "Readability Matters",
      content: "The website prioritizes readability by using legible fonts, appropriate font sizes, and ample white space. This focus on readability ensures that visitors can easily consume the content and navigate through the site without straining their eyes.",
      date: sub(new Date(), { minutes: 30 }).toISOString(), // create a date for the post
      userId: "3",
        reactions: {
            thumbsUp: 0,
            thumbsDown: 0,
            wow: 0,
            heart: 0,
            coffee: 0
      },
      image: null,
    },            
];

const postsSlice = createSlice({ // create a slice for the posts
  name: "posts", // slice name
  initialState, // initial state
  reducers: {
    postAdded: { //`postAdded` reducer
      reducer(state, action) { // reducer function
        state.push(action.payload); // add the new post to the state
      },
      prepare(title, content, userId, image) { // prepare function
        return {
          payload: { // create a payload object
            id: nanoid(), // generate a unique ID for the post
            title, // add the title
            content, // add the content
            date: new Date().toISOString(), // add the date
            userId, // add the user ID
            image, // add the image
            reactions: { // add the reactions
              thumbsUp: 0,
              thumbsDown: 0,
              wow: 0,
              heart: 0,
              coffee: 0,
            },
            
          },
        };
      },
    },
    postUpdated(state, action) { // create a postUpdated reducer
      const {id, title, content, image} = action.payload; // get the id, title, content, and image from the payloaduserId from the payload
      const existingPost = state.find((post) => post.id === id); // find the post with the given id
      if (existingPost) { // if the post exists
        existingPost.title = title; // update the title
        existingPost.content = content; // update the content
        if (image == undefined ) existingPost.image = image; // update the image if it exists
      }
    },
    reactionAdded(state, action) { // create a reactionAdded reducer
      const { postId, reaction } = action.payload; // get the postId and reaction from the payload
      const existingPost = state.find((post) => post.id === postId); // find the post with the given postId
      if (existingPost) { // if the post exists
        existingPost.reactions[reaction]++; // increment the reaction count
      }
    },
  },  
});


export const selectAllPosts = (state) => state.posts; // create a selector to access the posts state

export const selectPostById = (state, postId) => state.posts.find((post) => post.id === postId); // create a selector to access a post by its id

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions; // export the addPost, updatePost, and reactionAdded actions

export default postsSlice.reducer; // export the posts reducer
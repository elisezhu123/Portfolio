// This component will display the reaction buttons for each post. When a user clicks on a reaction button, the reactionAdded action will be dispatched with the post ID and the reaction name.
import React from "react";

/* import the useDispatch hook from react-redux */
import { useDispatch } from "react-redux";

/* import the reactionAdded action from the postsSlice */
import { reactionAdded } from "./PostSlice.jsx"; // import the reactionAdded action from the postsSlice

/* create an object with reaction emojis */
const reactionEmoji = {
    thumbsUp: '👍',
    thumbsDown: '👎',
    wow: '😃',
    heart: '🥰',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => { // create a ReactionButtons component that takes a post as a prop
    const dispatch = useDispatch() // create a dispatch variable

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button // create a button for each reaction
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name })) // dispatch the reactionAdded action with the post ID and reaction name
                }
            >
                {emoji} {post.reactions[name]} {/* display the reaction emoji and the number of reactions */}
            </button>
        )
    })

    return <div>{reactionButtons}</div> // return the reaction buttons
}
export default ReactionButtons // export the ReactionButtons component
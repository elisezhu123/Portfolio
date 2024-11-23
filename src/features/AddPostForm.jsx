/* import useDispatch, useSelector, userState and nonid */
import React from 'react';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* import action */
import { userAdded } from './UserSlice.jsx';
import { postAdded } from './PostSlice.jsx';
import { selectAllUsers } from './UserSlice.jsx';

/* import CSS */
import './AddPostForm.css';

const AddPostForm = () => {
    /* import the useState hook */
    const dispatch = useDispatch(); // create a dispatch variable

    const [title, setTitle] = useState('') // create a title state
    const [content, setContent] = useState('') // create a content state
    const [authorName, setAuthorName] = useState(""); // Author name input state

    const users = useSelector(selectAllUsers) // create a users variable to access the users state

    
    /* create a state to check whether the text is edited  */
    const onSavePostClicked = () => {
        if (title && content && authorName) { // check if the title, content and author are not empty

            let user = users.find((user) => user.name === authorName);

            if (!user) {
                const newUserId = String(users.length + 1); // Generate a new user ID
                dispatch(userAdded({ id: newUserId, name: authorName })); // Add the user to the state
                user = { id: newUserId, name: authorName }; // Create the new user object
            }

            // Dispatch the post with the correct user ID
            dispatch(postAdded(title, content, user.id));

            // Clear the form
            setTitle("");   // clear the title state
            setContent(""); // clear the content state
            setAuthorName(""); // clear the authorName state
        }
        else {
            console.log("Validation Failed:", { title, content, authorName });
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(authorName) // create a variable to check if the title, content and userId are not empty

    const usersOptions = users?.map(user => ( // map through the users state and return an option for each user
        <option key={user.id} value={user.id}> {/*create an option tag with the user's id as the key and value */}
            {user.name} {/* set the text of the option to the user's name */}
        </option> // close the option tag
    ))

    return (
        <section className='add-post-form'>
            <h2 className='name'>Comments</h2>
            <form className='comment-form'>
                <label htmlFor="postTitle">Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title} // set the value of the input to the title state
                    onChange={(e) => setTitle(e.target.value)} // set the title state to the value of the input
                />
                <label htmlFor="postAuthor">Author:</label>
                <input
                    type="text"
                    id="postAuthor"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)} // set the authorName state to the value of the input
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)} // set the content state to the value of the input
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave} // disable the button if canSave is false
                >   Save Comment
                </button>
            </form>
        </section>
    )
}

export default AddPostForm
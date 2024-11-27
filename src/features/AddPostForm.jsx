/* import features */
import React, { useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';

/* import action */
import { postAdded} from './PostSlice.jsx';
import { selectAllUsers, userAdded } from './UserSlice.jsx';

/* import CSS */
import './AddPostForm.css';

const AddPostForm = () => { // create a AddPostForm functional component

    const [title, setTitle] = useState('') // create a title state
    const [content, setContent] = useState('') // create a content state
    const [authorName, setAuthorName] = useState(""); // Author name input state
    const [imageFile, setImageFile] = useState(null); // State for selected file
    const [imagePreview, setImagePreviw] = useState(null); // create a image preview state
    const [ishandle, setIshandle] = useState(false); // create a ishandle state

    const dispatch = useDispatch(); // create a dispatch variable
    const users = useSelector(selectAllUsers); // Access the users state using the selectAllUsers selector

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorNameChanged = (e) => setAuthorName(e.target.value);

    // Create a function to handle file changes
    const handleFileChange = (e, type) => {
        const file = e.target.files?.[0]; // get the file from the event 
        if (!file) return; // return if there is no file
        if (type === 'image') { // check if the file is an image
            setImageFile(file); // set the selected file state to the file
            setImagePreviw(URL.createObjectURL(file)); // create a preview URL for the file
        }
        setIshandle(true); // set ishandle to true
    };

    /* create a state to check whether the text is edited  */
    const onSavePostClicked = () => {
        if (title && content && authorName) { // check if the title, content and author are not empty
            let userId = users.find(user => user.name === authorName)?.id; // find the user with the matching name
            // Dispatch the postAdded action with the title, content, userId, and img

            if (!userId) {
                userId = String(users.length + 1);
                dispatch(userAdded({ id: userId, name: authorName }));
            }

            dispatch(postAdded(title, content, authorName, imagePreview));
            // Notify to close the form after saving

            // Clear the form
            setTitle("");   // clear the title state
            setContent(""); // clear the content state
            setAuthorName(""); // clear the authorName state
            setImageFile(null); // clear the image URL state
            setImagePreviw(null); // clear the image preview state
            setIshandle(false); // set ishandle to false
        } else {
            console.log("Validation Failed:", { title, content, authorName, imagePreview}); // log an error if the title, content or userId are empty
        }
    };

    // Create a variable to check if the title, content and userId are not empty
    const canSave = Boolean(title) && Boolean(content) && Boolean(authorName) // create a variable to check if the title, content and userId are not empty

    return (
        <section className='add-post-form'>
            <h2 className='name'>Add a Comment</h2>
            <form className='comment-form'>
                <label htmlFor="postTitle">
                    <box-icon name='heading' size="20px" color='#ffffff'></box-icon>
                    Title:
                </label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title} // set the value of the input to the title state
                    onChange={onTitleChanged} // set the title state to the value of the input
                />

                <label htmlFor="postAuthor">
                    <box-icon name='face' size="20px" color='#ffffff' ></box-icon>
                    Author:
                </label>
                <input
                    type="text"
                    id="postAuthor"
                    value={authorName}
                    onChange={onAuthorNameChanged} // set the authorName state to the value of the input
                />

                <label htmlFor="postContent">
                    <box-icon name='comment-edit' size="20px" color='#ffffff' ></box-icon>
                    Content:
                </label>
                <textarea
                    id="postContent"
                    htmlFor="postContent"
                    value={content}
                    onChange={onContentChanged} // set the content state to the value of the input
                />

                <label htmlFor="postImage">
                    <box-icon name='upload' size="20px" color='#ffffff' ></box-icon>
                    Upload Image/File:
                </label>

                <input
                    htmlFor="postImage"
                    id="postImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'image')}
                    className='image-button'
                />
                {imagePreview && <img src={imagePreview} alt="Preview" className="selected-image" />}

                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave} // disable the button if canSave is false
                    className='save-button'
                >   Save Comment
                </button>
            </form>
        </section>
    )
}

export default AddPostForm
import React, { useState } from "react";
/* Import Redux hooks */
import { useSelector, useDispatch } from "react-redux";

/* Import components */
import { selectAllPosts, postUpdated } from "./PostSlice.jsx";
import PostAuthor from "./PostAuthor.jsx";
import Time from "./Time.jsx";
import ReactionButtons from "./ReactionButton.jsx";

/* Import CSS */
import './PostLists.css';

const PostLists = () => {
  const dispatch = useDispatch(); // Create a dispatch variable
  const posts = useSelector(selectAllPosts); // Access the posts state using the selectAll selector

  /* State for editing posts */
  const [editedPostId, setEditedPostId] = useState(null); // ID of the post being edited
  const [editedTitle, setEditedTitle] = useState(""); // Title of the edited post
  const [editedContent, setEditedContent] = useState(""); // Content of the edited post

  /* Sort posts by date in descending order */
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  /* Handle clicking the edit button */
  const handleEditClick = (post) => {
    setEditedPostId(post.id); // Set the post ID to be edited
    setEditedTitle(post.title); // Set the title to be edited
    setEditedContent(post.content); // Set the content to be edited
    
  };

  /* Handle saving the edited post */
  const handleSaveComplete = () => {
      dispatch(postUpdated({ id: editedPostId, title: editedTitle, content: editedContent })); // Dispatch the updated post
      setEditedPostId(null); // Reset the edited post state
  };

  /* Render posts */
  const renderedPosts = orderedPosts.map((post) => (
    <div className="container" key={post.id}>
      {editedPostId === post.id ? (
        /* Render editing form if this post is being edited */
        <div className="edit-container">
            <label htmlFor="editTitle">
              <box-icon name='heading' size="20px" color='#ffffff'></box-icon>
              Title:
            </label>

            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)} // Update edited title
              placeholder="Edit title"
              className="edit-title"
            />
            
            <label htmlFor="editContent">
              <box-icon name='comment-edit' size="20px" color='#ffffff'></box-icon>
              Content:
            </label>
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)} // Update edited content
              placeholder="Edit content"
              className="edit-content"
            />

            <button 
              onClick={handleSaveComplete}
              className="save-button"
            > Save changes
            </button>
        </div>
      ) : (
        /* Render normal post view */
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.image &&(
              <img
                src={post.image}
                alt= "post image"
                className="post-image"
              />
            )}
          <p className="post-credit">
            <PostAuthor userId={post.userId} />
            <Time timestamp={post.date} />
            <span
              className="edit-link"
              onClick={() => handleEditClick(post)}
            >
              | Edit Comment
            </span>
          </p>
          <div className="emoji">
            <ReactionButtons post={post} />
          </div>
        </>
      )}
    </div>
  ));

  return (
    <section className="comment">
      {renderedPosts}
    </section>
  );
};

export default PostLists;
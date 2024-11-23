/* import useSelector from react-redux to access the state */
import { useSelector } from "react-redux";

/* import components */
import { selectAllPosts } from "./PostSlice.jsx";
import PostAuthor from "./PostAuthor.jsx";
import Time from "./Time.jsx";
import ReactionButtons from "./ReactionButton.jsx";

/* import CSS */
import './PostLists.css';

const PostLists = () => {
  const posts = useSelector(selectAllPosts); // access the posts state using the selectAll selector

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => ( 
    <div className='container' key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p className="post-credit">
        <PostAuthor userId={post.userId} />
        <Time timestamp={post.date} />
      </p>
      <div className="emoji">
        <ReactionButtons post={post} />
      </div>
    </div>
  ))  // map through the posts state and return a comment component for each post

  return (
    <section className="comment">
      {renderedPosts}
    </section>
  )
}

export default PostLists;
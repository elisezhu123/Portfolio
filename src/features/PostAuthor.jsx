/* import useSelector from react-redux and use it to select all users from the store */
import { useSelector } from "react-redux";

/* import components from react-redux and use it to select all users from the store */
import { selectAllUsers } from "./UserSlice.jsx";

const PostAuthor = ({ userId }) => { // create a PostAuthor component that takes a userId as a prop
    const users = useSelector(selectAllUsers) // access the users state using the selectAllUsers selector

    const author = users.find(user => user.id === userId); // find the user with the matching id 

    return <span>by {author ? author.name : 'Anonymous author'}</span>   // return the author's name or 'Unknown author' if the author is not found
}
export default PostAuthor   // export the PostAuthor component
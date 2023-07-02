import { Link } from "react-router-dom";
import "./LeftNavbar.css";

const LeftNavbar = () => {

    return(
        <>
          <div className="leftNavbarDivCard">
            <p><Link to="/home">Home</Link></p>
            <p><Link to="/explore">Explore</Link></p>
            <p><Link to="/bookmarkedPosts">Bookmark</Link></p>
            <p><Link to="/likedPosts">Liked posts</Link></p>
            <p><button>POST</button></p>
        </div>
        </>
    )

}

export default LeftNavbar;
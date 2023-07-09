import { NavLink } from "react-router-dom";
import "./LeftNavbar.css";

const LeftNavbar = () => {

    return(
        <>
          <div className="leftNavbarDivCard">
            <p><NavLink to="/home">Home</NavLink></p>
            <p><NavLink to="/explore">Explore</NavLink></p>
            <p><NavLink to="/bookmarkedPosts">Bookmark</NavLink></p>
            <p><NavLink to="/signIn">Logout</NavLink></p>
            <p><button>POST</button></p>
        </div>
        </>
    )

}

export default LeftNavbar;
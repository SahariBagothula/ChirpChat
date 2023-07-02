import HeadingHeader from "../Home/HeadingHeader";
import LeftNavbar from "../Home/LeftNavbar";
import RightNavbar from "../Home/RightNavbar";

const LikedPosts = () => {

    return(
        <>
         <HeadingHeader/>
          <div className="mainCard">
          <div>
       <LeftNavbar/>
       </div>
         <div className="middleNavbarCard">
            <h1>LIKED POSTS ARE VISIBLE HERE</h1>
        </div>
       <div>
       <RightNavbar/>
       </div>
          </div>
        </>
    )
    
}

export default LikedPosts;
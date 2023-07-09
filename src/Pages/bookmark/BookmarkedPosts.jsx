import HeadingHeader from "../Home/HeadingHeader"
import LeftNavbar from "../Home/LeftNavbar"
import RightNavbar from "../Home/RightNavbar"

const BookmarkedPosts = () => {

    return(

        <>
         <HeadingHeader/>
          <div className="mainCard">
          <div>
       <LeftNavbar/>
       </div>
         <div className="middleNavbarCard">
            <h1>BOOKMARKED POSTS ARE VISIBLE HERE</h1>
        </div>
       <div>
       <RightNavbar/>
       </div>
          </div>
        </>
    )


}


export default BookmarkedPosts;
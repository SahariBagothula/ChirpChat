import HeadingHeader from "../Home/HeadingHeader";
import LeftNavbar from "../Home/LeftNavbar";
import RightNavbar from "../Home/RightNavbar";

const ExplorePosts = () => {

    return(
        <>
        <HeadingHeader/>
          <div className="mainCard">
          <div>
       <LeftNavbar/>
       </div>
         <div className="middleNavbarCard">
            <h1>EXPLORE ALL POSTS HERE</h1>
        </div>
       <div>
       <RightNavbar/>
       </div>
          </div>
        </>
    )

}

export default ExplorePosts;
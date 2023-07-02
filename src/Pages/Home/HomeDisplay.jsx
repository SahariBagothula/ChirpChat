import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import HeadingHeader from "./HeadingHeader";
import "./HomeDisplay.css";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";



const HomeDisplay = () => {

  const {state} = useContext(DataContext);

  const getUserDetails = (clickedUsername) => {
    return  state.usersData.find((userDetails) => userDetails.username === clickedUsername)
  }

    return(
        <>
        <HeadingHeader/>
          <div className="mainCard">
          <div>
       <LeftNavbar/>
       </div>
       <div className="hr" />
         <div className="middleNavbarCard">
            <h1>ALL POSTS WILL BE VISIBLE HERE</h1>
            <div>
              {
                state.postsData.map((postDetails) => {
                  return (
                    <div className="singlePostCard">
                      <p>{ getUserDetails(postDetails.username).firstName} {getUserDetails(postDetails.username).lastName}</p>
                      <p>@{getUserDetails(postDetails.username).username}</p>
                      <p>{ postDetails.content }</p>
                      <hr />
                      <p>Like Bookmark Comment Share</p>
                    </div>
                  )
                }
                )}
            </div>

        </div>
       <div>
       <RightNavbar/>
       </div>
          </div>
        </>
    )

}

export default HomeDisplay;
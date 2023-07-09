import { CgProfile } from "react-icons/cg";
import "./HeadingHeader.css";

const HeadingHeader = () => {

    return(
        <>
         <div className="headerDivCard">
        <section clasName="nav-section">
        <div className="nav-wrapper">
          <h1> ProjectName</h1>
          <div clasName="nav-search">
            <input type="text" placeholder="Search.." />
          </div>
          <div className="nav-right-side">
            <div>
              <CgProfile />
            </div>
          </div>
        </div>
      </section>
        </div>
        </>
    )

}


export default HeadingHeader;
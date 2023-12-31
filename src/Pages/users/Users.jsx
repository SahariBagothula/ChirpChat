import { useContext, useState } from "react";
import "./Users.css"

import { DataContext } from "../../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AuthenticationContext } from "../../context/AuthenticationContext";


export const Users = () => {
  const {
    initialState: { users },
    followUser,
    unfollowUser,
  } = useContext(DataContext);
  const { user } = useContext(AuthenticationContext);

  const [searchUser, setSearchUser] = useState("");

  const encodedToken = localStorage.getItem("token");

  const showUser = users?.filter(
    (person) => person?.username !== user?.username
  );

  const handleInput =
    searchUser?.trim()?.length > 0 &&
    showUser?.filter(({ name }) =>
      name.toLowerCase()?.includes(searchUser.trim().toLocaleLowerCase())
    );

  const handleFollow = (id) => {
    return user?.following?.some((item) => item._id === id);
  };

  return (
    <div className="user-main-div">
      <div className="user-search-div">
        <span className="search-icon">
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
        </span>
        <input
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Search"
        />{" "}
      </div>

      {searchUser.trim().length > 0 && (
        <div> {handleInput.length === 0 && <h4> No User found </h4>} </div>
      )}

      {handleInput.length > 0 && (
        <div className="user-div-A">
          {searchUser.length > 0 &&
            handleInput.map((person) => (
              <div key={person._id} className="user-div-B">
                <div className="user-div-C">
                  <div>
                    <img
                      src={person?.profilePicture}
                      className="profilePicture"
                      alt="profile pic"
                    />
                  </div>{" "}
                  <div className="user-div-D">
                    <span> {person?.name} </span>
                    <small> @{person?.username} </small>
                  </div>
                </div>
                <div>
                  <button className="user-btn"> Follow </button>
                </div>{" "}
              </div>
            ))}{" "}
        </div>
      )}

      <div className="user-div-A">
        <h2> Who to follow </h2>
        {showUser.map((person) => (
          <div key={person._id} className="user-div-B">
            <div className="user-div-C">
              <div>
                <img
                  src={person?.profilePicture}
                  className="profilePicture"
                  alt="profile pic"
                />
              </div>{" "}
              <div className="user-div-D">
                <span> {person?.name} </span>
                <small> @{person?.username} </small>
              </div>
            </div>
            <div>
              {handleFollow(person._id) ? (
                <button
                  onClick={() => unfollowUser(encodedToken, person._id)}
                  className="user-btn"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => followUser(encodedToken, person._id)}
                  className="user-btn"
                >
                  Follow
                </button>
              )}
            </div>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

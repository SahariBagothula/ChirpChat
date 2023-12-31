
import { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { DataContext } from "../../context/DataContext";
import { Avatar } from "./avatar/Avatar";

import "./EditUser.css";

export const EditUser = () => {
  const { editUser } = useContext(DataContext);
  const { user, setUser, setEditUserModal, avatar, setAvatar } =
    useContext(AuthenticationContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const encodedToken = localStorage.getItem("token");

  return (
    <div>
      <div>
        <img
          alt="profile img"
          src={user?.profilePicture}
          className="edit-img"
          id="file"
        />
      </div>
      <h3
        className="avatar-heading"
        htmlFor="file"
        onClick={() => setAvatar(true)}
      >
        Change Avatar
      </h3>
      {avatar && (
        <div
          onClick={() => setAvatar(false)}
          className="avatar_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="avatar_modal_outer_container"
          >
            <Avatar />
          </div>
        </div>
      )}

      <div>
        {" "}
        <div className="edit-inner-div">
          <h3> Name </h3>
          <input
            placeholder="Name"
            type="text"
            value={user?.name}
            onChange={handleInput}
            name="name"
            id="name"
          />
        </div>
        <div className="edit-inner-div">
          <h3> Bio </h3>
          <textarea
            placeholder="Bio"
            type="text"
            value={user?.bio}
            onChange={handleInput}
            name="bio"
            id="bio"
            rows="5"
          >
            {" "}
          </textarea>
        </div>
        <div className="edit-inner-div">
          <h3> Url </h3>
          <input
            placeholder="Link"
            type="url"
            value={user?.link}
            onChange={handleInput}
            name="link"
            id="link"
          />
        </div>{" "}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          editUser(user, encodedToken, setEditUserModal);
        }}
        className="edit-user-btn"
      >
        {" "}
        Save Changes{" "}
      </button>
    </div>
  );
};
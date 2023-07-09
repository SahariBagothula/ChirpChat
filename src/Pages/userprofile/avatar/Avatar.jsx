import { useContext } from "react";
import "./Avatar.css";
import { useState } from "react";
import { AvatarAlert, AvatarUpdate } from "../../../ToastUtils";
import { AuthenticationContext } from "../../../context/AuthenticationContext";
import { AvatarOptions } from "../../../AvatarOptions";

export const Avatar = () => {
  const { setUser, setAvatar } = useContext(AuthenticationContext);

  const [isAvatar, setIsAvatar] = useState("");

  return (
    <div>
      <div className="avatars-div">
        {AvatarOptions.map((avatars, index) => (
          <div key={index}>
            {" "}
            <img
              onClick={() => setIsAvatar(() => avatars)}
              className="avatars-img"
              src={avatars}
              alt="user avatar"
            />{" "}
          </div>
        ))}
      </div>
      <button
        className="avatars-btn"
        onClick={() => {
          if (isAvatar.length === 0) {
            AvatarAlert();
            setAvatar(false);
          } else {
            setUser((user) => ({
              ...user,
              profilePicture: isAvatar,
            }));
            AvatarUpdate();
            setAvatar(false);
          }
        }}
      >
        {" "}
        Set Avatar{" "}
      </button>
    </div>
  );
};
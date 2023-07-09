import { Route, Routes } from "react-router-dom";

import { RequireAuth } from "../utils/RequireAuth";
import { Landing } from "../Pages/landing/Landing";
import { Feed } from "../Pages/feed/Feed";
import { Bookmark } from "../Pages/bookmark/BookMark";
import { Explore } from "../Pages/explore/Explore";
import { SignIn } from "../Pages/SignIn/SignIn";
import { SignUp } from "../Pages/SignUp/SignUp";
import { UserProfile } from "../Pages/userprofile/UserProfile";

export const AppRouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              {" "}
              <Explore />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />

        <Route
          path="/bookmark"
          element={
            <RequireAuth>
              <Bookmark />
            </RequireAuth>
          }
        />
        <Route
          path="/userprofile"
          element={
            <RequireAuth>
              <UserProfile />{" "}
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};
import './App.css';
import { Routes, Route } from "react-router-dom";

import HomeDisplay from './Pages/Home/HomeDisplay';
import ExplorePosts from './Pages/Explore/ExplorePosts';
import BookmarkedPosts from './Pages/Bookmarks/BookmarkedPosts';
import LikedPosts from './Pages/LikedPosts/LikedPosts';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeDisplay/>}></Route>
        <Route path="/home" element={<HomeDisplay/>}></Route>
        <Route path="/explore" element={<ExplorePosts/>}></Route>
        <Route path="/bookmarkedPosts" element={<BookmarkedPosts/>}></Route>
        <Route path="/likedPosts" element={<LikedPosts/>}></Route>
      </Routes>
    </div>
  );

}

export default App;

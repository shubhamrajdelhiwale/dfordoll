import React from 'react'
import '../src/index.css';
import SearchBox from "./SearchBox";

const Header = () => {
  const handleLoginClick = () => {
  window.location.href = "/Login";  // full reload to login page

};
const handleLogoutClick = () => {
  window.location.href = "/";  // full reload to home page after logout

};




    return (
        <header className="bg-black border-b border-cyan-300 sticky top-0 z-50 top-0 shadow-md py-2 px-6 h-15 w-full flex justify-between items-center">
            {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="./src/assets/image/logo2.png" alt="Logo" className="h-8 w-auto" />
        <span className="text-xl font-bold text-red-600">Movie</span><span className="text-xl font-bold text-white">Wale</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex ml-16 gap-5 px-13 space-x-6">
        <a href="http://localhost:5173" className="text-white hover:text-indigo-600 font-medium">Home</a>
        <a href="http://localhost:5173/Movies" className="text-white hover:text-indigo-600 font-medium">Movies</a>
        <a href="http://localhost:5173/Webseries" className="text-white hover:text-indigo-600 font-medium">Web series</a>
        <a href="http://localhost:5173/TvShows" className="text-white hover:text-indigo-600 font-medium">Tv Shows</a>
        <a href="http://localhost:5173/Movies" className="text-white hover:text-indigo-600 font-medium">Premium</a>
        <a href="http://localhost:5173" className="text-white hover:text-indigo-600 font-medium">Hot & New</a>
      </nav>

      <div className="flex justify-end items-center ml-14  py-2">
  <SearchBox />
</div>

      {/* Login/Sign In */}
      <div className="space-x-2">
       <button 
  onClick={handleLoginClick} 
  className="bg-purple-600  text-white px-4 py-2 rounded-lg"
>
  Login
</button>
        <button onClick={handleLogoutClick}  className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Sign out
        </button>
      </div>
        </header>
    )
}
export default Header 
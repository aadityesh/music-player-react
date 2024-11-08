import React from "react";
import MusicList from "./MusicList";

function WelcomePage({ theme, handleThemeChange }) {
  return (
    <>
      {/* logo */}
      <header className="max-w-[80%] flex pt-[30px] items-center justify-between mx-auto">
        <div>
          <img
            src="/images/logo.png"
            alt="logo"
            className="max-h-[100px] max-w-[100px]"
          />
          <p className="text-xl text-center font-medium">Lorem Ipsum</p>
        </div>
        <div>
          <button
            onClick={handleThemeChange}
            className="border border-borderColor p-3 rounded-md"
          >
            Toggle to {theme === "light" ? "dark" : "light"}
          </button>
        </div>
      </header>
      <main className="max-w-[80%] mx-auto">
        <MusicList />
      </main>
    </>
  );
}

export default WelcomePage;

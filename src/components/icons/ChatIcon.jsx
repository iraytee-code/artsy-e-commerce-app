import React, { Fragment } from "react";

const ChatIcon = () => {
  return (
    <Fragment>
      <div className="cursor-pointer w-16 h-16 bg-blue rounded-full absolute right-8 bottom-16 shadow-7xl flex items-center justify-center bg-red-500">
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 29V2.9C0 2.1025 0.2842 1.41955 0.8526 0.85115C1.42003 0.283716 2.1025 0 2.9 0H26.1C26.8975 0 27.5805 0.283716 28.1489 0.85115C28.7163 1.41955 29 2.1025 29 2.9V20.3C29 21.0975 28.7163 21.7805 28.1489 22.3489C27.5805 22.9163 26.8975 23.2 26.1 23.2H5.8L0 29Z"
            fill="white"
          />
        </svg>
      </div>
    </Fragment>
  );
};

export default ChatIcon;

import React from "react";

const Loading = ({ url }) => {
  return (
    <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
      <img src={url} alt="" />
    </div>
  );
};

export default Loading;

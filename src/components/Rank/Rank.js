import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="center">
      <div className=" flex self-center f3">
        {`Hey ${name} , your current entry count is ...`}
      </div>
      <div className="flex  f1 ">{entries}</div>
    </div>
  );
};

export default Rank;

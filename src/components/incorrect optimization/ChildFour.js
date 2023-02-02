import React from "react";

export const ChildFour = ({ name }) => {
  console.log("child four render");
  const date = new Date();
  return (
    <div>
      hello {name}. it is currently {date.getHours()} : {date.getMinutes()} :{" "}
      {date.getSeconds()}
    </div>
  );
};

export const MemoizedChildFour = React.memo(ChildFour);

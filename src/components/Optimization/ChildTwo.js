import React from "react";

export const ChildTwo = () => {
  console.log("childTwo");
  return <div>ChildTwo</div>;
};

export const MemoizedChildTwo = React.memo(ChildTwo);

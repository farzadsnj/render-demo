import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFour } from "./ChildFour";
import { MemoizedChildFive } from "./ChildFive";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildTwo } from "../Optimization/ChildTwo";
import { ChildOne } from "../Optimization/ChildOne";

export default function ParentFour() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("farzad");

  const person = {
    fname: "farzad",
    lname: "snj",
  };
  const memoizedPerson = useMemo(() => person, []);
  const handleClick = () => {};
  const memoizedHandleClick = useCallback(handleClick, []);
  console.log("parentFour");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      <button onClick={() => setName("farzadsnj3")}>change name</button>
      <MemoizedChildFive name={name} person={memoizedPerson} />
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
      <MemoizedChildFour />
      <MemoizedChildThree name={name}>
        <strong>hello</strong>
      </MemoizedChildThree>
      <MemoizedChildTwo />
      <ChildOne />
    </div>
  );
}

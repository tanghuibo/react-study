import React, { cloneElement } from "react";

const FatherComponent = ({ children }) => {
  return (
    <div>
      <div>this is my children: </div>
      {/* 给子组件 name 赋值 */}
      {cloneElement(children, { name: "Father set" })}
    </div>
  );
};

export default FatherComponent;

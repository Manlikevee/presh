import React, { useState } from "react";

function MyComponent() {
  const [navClass, setNavClass] = useState("");

  const handleClick = () => {
    setNavClass(navClass === "navactive" ? "" : "navactive");
  };

  return (

    
    <p onClick={handleClick} className={navClass}>
      Toggle Nav Class
    </p>
  );
}

export default MyComponent;
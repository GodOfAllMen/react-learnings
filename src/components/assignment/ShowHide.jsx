import { useState } from "react";
import StudentInfo from "./StudentInfo";

// Q1: Show / Hide Message
const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>1. Show / Hide Message</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>Hello! This is a secret message.</p>}

      <StudentInfo />
    </div>
  );
};

export default ShowHide;

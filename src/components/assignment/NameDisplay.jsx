import { useState } from "react";
import StudentInfo from "./StudentInfo";

// Q2: Name Display Program
const NameDisplay = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>2. Name Display Program</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Entered name: {name}</p>

      <StudentInfo />
    </div>
  );
};

export default NameDisplay;

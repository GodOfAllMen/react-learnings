import { useState } from "react";
import StudentInfo from "./StudentInfo";

// Q3: Simple Like Button
const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>3. Simple Like Button</h2>
      <p>Likes: {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>Like</button>{" "}
      <button onClick={() => setLikes(0)}>Reset</button>

      <StudentInfo />
    </div>
  );
};

export default LikeButton;

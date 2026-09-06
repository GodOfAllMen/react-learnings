import Child from "./Child";
import Child1 from "./Child1";

const Parent = () => {
  const message = "Hello Filthy little Creature";
  const message1 = "Hello Child 1";

  return (
    <div>
      <h1>Parent Component</h1>

      <Child value={message} />

      <Child1 value={message1} />
    </div>
  );
};

export default Parent;
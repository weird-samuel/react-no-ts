import { useState } from "react";
const Content = () => {
  const [name, setName] = useState("Samuel");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["John", "Jane", "Joe"];
    const idx = Math.floor(Math.random() * names.length);
    return setName(names[idx]);
  };

  const handleClick2 = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <main>
      <p>Hello {name} !</p>
      <button onClick={handleNameChange}>Click me</button>
      <button onClick={handleClick2}>Count</button>
      <button onClick={() => handleClick2("Samuel")}>Button 2</button>
    </main>
  );
};

export default Content;

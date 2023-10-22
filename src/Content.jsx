import { useState } from "react";
const Content = () => {
  const [name, setName] = useState("Samuel");

  const HandleNameChange = () => {
    const names = ["John", "Jane", "Joe"];
    const idx = Math.floor(Math.random() * names.length);
    return setName(names[idx]);
  };

  const handleClick2 = () => {
    console.log("You clicked me!");
  };

  return (
    <main>
      <p>Hello {name} !</p>
      <button onClick={HandleNameChange}>Click me</button>
      <button onClick={() => handleClick2("Samuel")}>Button 2</button>
    </main>
  );
};

export default Content;

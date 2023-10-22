const Content = () => {
  const HandleNameChange = () => {
    const names = ["John", "Jane", "Joe"];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
  };
  return (
    <main>
      <p>Hello {HandleNameChange()} !</p>
    </main>
  );
};

export default Content;

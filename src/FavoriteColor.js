
import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  const [Name, setName] = useState("Name")
  

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <h2>And my name is {Name}.</h2>
      <button
        type="button"
        onClick={() => setColor("black")}
      >Black</button>
      <p></p>
      <button
        type="button"
        onClick={() => setName("Apurba")}
      >Name?</button>
    </>
  )
}

ReactDOM.render(<FavoriteColor />, document.getElementById('root'));
export default FavoriteColor;
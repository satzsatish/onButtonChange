import { useState } from "react";
import "./styles.css";

export default function App() {
  let intilaValue = "Y";
  let [color, SetColor] = useState(intilaValue);
  let gradelist = [1, 2, 3, 5];
  const ChnageColor = () => {
    //console.log(!intilaValue);
    if (intilaValue === "Y") {
      intilaValue = "N";
    } else {
      intilaValue = "Y";
    }
    SetColor(intilaValue);
  };
  let option = gradelist.map((item) => {
    return <option value={item}>grade {item}</option>;
  });
  const ChnageGrade = (e) => {
    console.log(e.target.value);
  };
  console.log(option);
  return (
    <div className="App">
      {color === "Y" ? (
        <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      ) : (
        <h1 style={{ color: "black" }}>Hello CodeSandbox</h1>
      )}
      <button onClick={ChnageColor}>add {color}</button>
      {color === "Y" ? (
        <h1 style={{ color: "black" }}>Hello CodeSandbox</h1>
      ) : (
        <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      )}
      <select onChange={ChnageGrade}>{option}</select>
    </div>
  );
}

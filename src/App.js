import "./App.css";
import { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("black");

  const stylingBoxes = stylings.map((style) => (
    <button
      onClick={() => setStyle(style)}
      className="btn btn-light"
      style={styles[style]}
      key={style}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      onClick={() => setColor(color)}
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea
        style={{
          color: color,
          fontWeight: style,
          fontStyle: style,
          textDecorationLine: style,
        }}
        setText={setText}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;

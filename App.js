import { useState } from "react";

import "./styles.css";

const emojiDict = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "💔": "Broken Heart",
  "🎄": "Christmas Tree",
  "🎅": "Santa Claus",
  "🔥": "Fire",
  "🎁": "Wrapped Gift",
  "😂": "Face with Tears of Joy"
};
const emojis = Object.keys(emojiDict);
function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Emoji Meaning will appear here.....");
  function inputEmoji(event) {
    var emojiInput = event.target.value;
    setEmoji(emojiInput);
    // var meaning=emoji[emojiInput];

    //console.log(meaning);
    if (emojiInput in emojiDict) {
      setMeaning(emojiDict[emojiInput]);
    } else {
      setMeaning("Emoji is not in our database");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDict[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>inside Outt</h1>
      <input
        onChange={inputEmoji}
        value={emoji}
        placeholder="Enter Your Emoji......"
      />
      <h2>{emoji}</h2>
      <h2>{meaning}</h2>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}

export default App;

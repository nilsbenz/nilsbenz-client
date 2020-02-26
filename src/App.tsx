import React, { useState, useEffect } from "react";
import "./App.css";
import fire from "./fire";

function App() {
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let messagesRef = fire
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);

    messagesRef.on("value", snapshot => {
      const res = Object.entries(snapshot.val()).map(([id, text]) => ({
        id,
        text
      }));
      setMessages(res);
      setLoading(false);
    });
  }, []);

  const addMessage = (e: any) => {
    e.preventDefault();
    fire
      .database()
      .ref("messages")
      .push(input);
    setInput("");
  };

  if (loading) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <form onSubmit={addMessage}>
        <input
          type="text"
          onChange={(e: any) => setInput(e.target.value)}
          value={input}
        />
        <input type="submit" />
        <ul>
          {messages.map((message: any) => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;

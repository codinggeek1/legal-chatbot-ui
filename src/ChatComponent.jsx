import React, { useState } from "react";
import axios from "axios";

const ChatComponent = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    try {
      const res = await axios.post("https://https://legal-chatbot-p2l9.onrender.com/legal-query/", {
        question: query,
      });
      setResponse(res.data.response);
    } catch (error) {
      setResponse("Error fetching legal information. Try again.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Legal Chatbot</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "80%" }}
      />
      <button onClick={handleQuery} style={{ padding: "10px", marginLeft: "10px" }}>
        Ask
      </button>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
};

export default ChatComponent;

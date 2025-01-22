import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = ({ meetingId, userId }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/meetings/${meetingId}/chat`);
        setMessages(response.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();
  }, [meetingId]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    try {
      await axios.post("/meetings/send-message", {
        meetingId,
        userId,
        message,
      });
      setMessages((prevMessages) => [...prevMessages, { userId, message }]);
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg w-1/4 space-y-4">
      <h2 className="text-xl text-white">Chat</h2>
      <div className="h-72 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className="bg-gray-700 p-2 rounded-lg">
            <span className="text-white">{msg.userId}: </span>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 w-full rounded bg-gray-700 text-white"
          placeholder="Type a message"
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;

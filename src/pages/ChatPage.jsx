import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css'; // Import Material Icons

const ChatPage = () => {
  const { name } = useParams(); // Get the contact name from URL parameters

  // Debug: log the name to check if it's received correctly
  console.log('ChatPage name parameter:', name);

  const [messages, setMessages] = useState([
    { sender: 'self', text: 'Hi', time: '18:55' },
    { sender: 'other', text: 'Hello', time: '19:03' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      const newMessage = {
        sender: 'self',
        text: inputMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.profileDetails}>
          <span style={styles.profileName}>{name || 'Chat'}</span> {/* Display the contact name */}
        </div>
        <div style={styles.icons}>
          {/* Voice Call Button */}
          <button style={styles.iconButton}>
            <i className="material-icons" style={styles.icon}>phone</i>
          </button>

          {/* Video Call Button */}
          <button style={styles.iconButton}>
            <i className="material-icons" style={styles.icon}>videocam</i>
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div style={styles.chatArea}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.messageBubble,
              alignSelf: message.sender === 'self' ? 'flex-end' : 'flex-start',
              backgroundColor: message.sender === 'self' ? '#add8e6' : '#fff', // Light blue for self, white for others
            }}
          >
            <p style={styles.messageText}>{message.text}</p>
            <span style={styles.messageTime}>{message.time}</span>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form style={styles.inputArea} onSubmit={handleSendMessage}>
        {/* Attachment Button */}
        <button type="button" style={styles.iconButton}>
          <i className="material-icons" style={styles.icon}>attachment</i>
        </button>

        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />

        {/* Microphone Button */}
        <button type="button" style={styles.iconButton}>
          <i className="material-icons" style={styles.icon}>mic</i>
        </button>

        <button type="submit" style={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw', // Full viewport width
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e5ddd5',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1c2535', // Dark blue color
    color: 'white',
    padding: '10px',
    width: '100%', // Full width
    boxSizing: 'border-box',
  },
  profileDetails: {
    flex: 1,
    marginLeft: '10px',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  icons: {
    display: 'flex',
    gap: '10px',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '24px', // Adjust icon size
  },
  chatArea: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#222e45',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%', // Full width
    boxSizing: 'border-box',
  },
  messageBubble: {
    maxWidth: '60%',
    padding: '15px', // Inside padding
    margin: '30px 20px', // Outside margin
    borderRadius: '10px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    wordBreak: 'break-word', // Ensures long words break correctly
  },
  messageText: {
    margin: 0,
  },
  messageTime: {
    fontSize: '12px',
    color: '#888',
    marginTop: '5px',
    textAlign: 'right',
  },
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#1c2535', // Light blue color
    borderTop: '1px solid #ddd',
    width: '100%', // Full width
    boxSizing: 'border-box',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    outline: 'none',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#f9a825',
    color: 'white',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
  },
};



export default ChatPage;

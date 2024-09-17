import React, { useState } from 'react';

const WhatsAppDiscordClone = () => {
  const [message, setMessage] = useState('');
  const [currentChannel, setCurrentChannel] = useState('general');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [messages, setMessages] = useState({
    'general': [
      {
        id: 1,
        user: 'Admin',
        avatar: 'A',
        text: "Welcome to the general chat!",
      },
    ],
    'technology': [
      {
        id: 2,
        user: 'Bob Smith',
        avatar: 'B',
        text: "Cloud computing is an evolving technology that powers many applications today.",
      },
      {
        id: 3,
        user: 'Charlie Brown',
        avatar: 'C',
        text: "Machine learning is all about training models to predict outcomes based on data!",
      },
    ],
    'entrepreneurship': [
      {
        id: 4,
        user: 'Alice Johnson',
        avatar: 'A',
        text: "Entrepreneurship is about turning ideas into reality, creating value, and solving real-world problems.",
      },
      {
        id: 5,
        user: 'David Lee',
        avatar: 'D',
        text: "Successful entrepreneurs constantly innovate, adapt, and take calculated risks to grow their businesses.",
      }
      
      
    ],
    'business innovation': [
      {
        id: 6,
        user: 'Emily Davis',
        avatar: 'E',
        text: "Business innovation drives growth by introducing new ideas, processes, and products that disrupt traditional markets.",
      },
      {
        id: 7,
        user: 'Frank Wilson',
        avatar: 'F',
        text: "To stay competitive, companies must embrace business innovation and continually evolve with the changing landscape.",
      }
      
      
    ],
    'placement': [
      {
        id: 8,
        user: 'Grace Miller',
        avatar: 'G',
        text: "Tech giants like Google and Microsoft are opening their 2024 placement drives with roles in software engineering and data science.",
      },
      {
        id: 9,
        user: 'Henry Thompson',
        avatar: 'H',
        text: "Infosys is offering new graduate positions in business consulting and IT services, focusing on cloud and AI solutions.",
      },
      {
        id: 10,
        user: 'Isabella Martinez',
        avatar: 'I',
        text: "Amazon is conducting placement tests for roles in operations and cloud infrastructure, with a focus on scalability and automation.",
      },
      {
        id: 11,
        user: 'Jack Robinson',
        avatar: 'J',
        text: "TCS has announced its hiring plans for 2024, targeting freshers for roles in digital transformation and cybersecurity.",
      }
      
      
    ],
    'AI': [
      {
        id: 12,
        user: 'Karen White',
        avatar: 'K',
        text: "AI is revolutionizing industries by automating tasks, enhancing decision-making, and driving innovation across sectors.",
      },
      {
        id: 13,
        user: 'Liam Harris',
        avatar: 'L',
        text: "The rise of AI is reshaping the future of work, with more emphasis on machine learning, NLP, and predictive analytics.",
      },
      {
        id: 14,
        user: 'Mia Anderson',
        avatar: 'M',
        text: "AI advancements are enabling personalized experiences in healthcare, education, and finance, improving user outcomes.",
      },
      {
        id: 15,
        user: 'Noah Carter',
        avatar: 'N',
        text: "Ethics in AI development is becoming increasingly important as organizations strive to build responsible and unbiased systems.",
      }
      
      
      
    ],
    'mentor-1': [
      {
        id: 4,
        user: 'Mentor 1',
        avatar: 'M1',
        text: "Hi, how can I help you today?",
      },
    ],
    'mentor-2': [
      {
        id: 5,
        user: 'Mentor 2',
        avatar: 'M2',
        text: "Hello! What do you need assistance with?",
      },
    ],
  });

  const people = [
    { id: 1, name: 'Mentor 1', active: true },
    { id: 2, name: 'Mentor 2', active: false },
    { id: 3, name: 'Mentor 3', active: false },
    { id: 4, name: 'Mentor 4', active: true },
    { id: 5, name: 'Mentor 5', active: false },
    { id: 6, name: 'Mentor 6', active: true },
    { id: 7, name: 'Mentor 7', active: true },
    { id: 8, name: 'Mentor 8', active: false },
    { id: 9, name: 'Mentor 9', active: false },
  ];

  const channels = [
    { id: 1, name: 'general', active: currentChannel === 'general' && !selectedMentor },
    { id: 2, name: 'technology', active: currentChannel === 'technology' && !selectedMentor },
    { id: 3, name: 'entrepreneurship', active: currentChannel === 'entrepreneurship' && !selectedMentor },
    { id: 4, name: 'business innovation', active: currentChannel === 'business innovation' && !selectedMentor },
    { id: 5, name: 'placement', active: currentChannel === 'placement' && !selectedMentor },
    { id: 6, name: 'AI', active: currentChannel === 'AI' && !selectedMentor },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        user: 'You',
        avatar: 'Y',
        text: message,
      };
      if (selectedMentor) {
        setMessages({
          ...messages,
          [`mentor-${selectedMentor}`]: [...(messages[`mentor-${selectedMentor}`] || []), newMessage],
        });
      } else {
        setMessages({
          ...messages,
          [currentChannel]: [...(messages[currentChannel] || []), newMessage],
        });
      }
      setMessage('');
    }
  };

  const handleChannelClick = (channel) => {
    setCurrentChannel(channel);
    setSelectedMentor(null);
  };

  const handleMentorClick = (mentor) => {
    setCurrentChannel(`mentor-${mentor}`);
    setSelectedMentor(mentor);
  };

  return (
    <div style={styles.container}>
      {/* Sidebar with title and circular avatars of people */}
      <div style={styles.serverSidebar}>
        <div style={styles.serverTitle}>Mentors</div>
        {people.map((person) => (
          <div
            key={person.id}
            style={{
              ...styles.serverIcon,
              backgroundColor: '#f9a825',
              position: 'relative',
            }}
            onClick={() => handleMentorClick(person.id)}
          >
            <span style={styles.personName}>{person.name}</span>
            {person.active && <div style={styles.activeDot}></div>}
          </div>
        ))}
      </div>

      {/* Channel List */}
      <div style={styles.channelSidebar}>
        <div style={styles.serverTitle}>Channels</div>
        <ul style={styles.channelList}>
          {channels.map((channel) => (
            <li
              key={channel.id}
              style={{
                ...styles.channelItem,
                backgroundColor: channel.active ? '#4f545c' : 'transparent',
              }}
              onClick={() => handleChannelClick(channel.name)}
            >
              #{channel.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div style={styles.chatArea}>
        <div style={styles.chatHeader}>
          <h3>{selectedMentor ? `Mentor ${selectedMentor}` : `#${currentChannel}`}</h3>
        </div>

        {/* Display Chat Messages */}
        <div style={styles.chatMessagesContainer}>
          <div style={styles.chatMessages}>
            {(messages[currentChannel] || []).map((msg) => (
              <div key={msg.id} style={styles.message}>
                <div style={styles.userAvatar}>{msg.avatar}</div>
                <div>
                  <div style={styles.userName}>{msg.user}</div>
                  <div>{msg.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        {(currentChannel && !selectedMentor) || selectedMentor ? (
          <div style={styles.chatInputContainer}>
            <input
              type="text"
              placeholder={`Message ${selectedMentor ? `Mentor ${selectedMentor}` : `#${currentChannel}`}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.chatInput}
            />
            <button onClick={handleSendMessage} style={styles.sendButton}>
              Send
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#36393f',
  },
  serverSidebar: {
    width: '150px',
    backgroundColor: '#1c2535',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10px',
    flexShrink: 0,
  },
  serverTitle: {
    paddingBottom: '15px',
    fontWeight: 'bold',
    color: 'white',
    borderBottom: '1px solid #23272a',
    textTransform: 'uppercase',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#2f3136',
  },
  serverIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    padding: '5px',
    position: 'relative',
  },
  personName: {
    fontSize: '17px',
    lineHeight: '20px',
    textAlign: 'center',
    wordWrap: 'break-word',
  },
  activeDot: {
    width: '15px',
    height: '15px',
    backgroundColor: '#43b581',
    borderRadius: '50%',
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    border: '2px solid #2f3136',
  },
  channelSidebar: {
    width: '250px',
    backgroundColor: '#222e45',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    flexShrink: 0,
  },
  channelList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  channelItem: {
    padding: '10px 0',
    cursor: 'pointer',
    color: 'white',
  },
  chatArea: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    width: 'calc(100% - 400px)',
  },
  chatHeader: {
    padding: '15px',
    backgroundColor: '#2f3136',
    borderBottom: '1px solid #23272a',
    color: 'white',
  },
  chatMessagesContainer: {
    flexGrow: 1,
    overflowY: 'auto',
  },
  chatMessages: {
    padding: '20px',
    color: 'black',
  },
  message: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  userAvatar: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#7289da',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
  },
  userName: {
    fontWeight: 'bold',
  },
  chatInputContainer: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #23272a',
  },
  chatInput: {
    flexGrow: 1,
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#2f3136',
    color: 'white',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#7289da',
    color: 'white',
    cursor: 'pointer',
  },
};

export default WhatsAppDiscordClone;

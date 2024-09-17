// src/pages/Mentorship.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from './Aside';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify styles

const indianColleges = [
  'IIT Bombay', 'IIT Delhi', 'IIT Kanpur', 'IIT Madras', 'IIT Kharagpur',
  'NIT Trichy', 'NIT Warangal', 'BITS Pilani', 'IISc Bangalore', 'DU',
  'JNU', 'IIT Guwahati', 'IIT Ropar', 'IIT BHU', 'IIT Hyderabad',
  'IIT Mandi', 'IIT Palakkad', 'IIT Bhubaneswar', 'IIT Jodhpur', 'IIT Dhanbad',
];

const dummyData = Array.from({ length: 20 }, (_, index) => ({
  name: `Mentor ${index + 1}`,
  role: `Role ${index % 5 === 0 ? 'Engineer' : index % 3 === 0 ? 'Designer' : 'Manager'}`,
  company: `Company ${index % 4 === 0 ? 'Tech' : 'Design'}`,
  expertise: index % 2 === 0 ? 'AI Development' : 'UI/UX Design',
  college: indianColleges[Math.floor(Math.random() * indianColleges.length)],
  profileImage: 'https://th.bing.com/th/id/OIG4.YDJ2CsoVQrIrCMEZEywP?pid=ImgGn',
  verified: Math.random() > 0.5,
}));

const Mentorship = () => {
  const navigate = useNavigate();

  // Retrieve the language preference from local storage
  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: '',
    role: '',
    company: '',
    expertise: '',
    college: '',
  });

  const translations = {
    en: {
      mentorship: 'My Mentors',
      findMentors: 'Find Mentors',
      loading: 'Loading...',
      noMentors: 'No mentors found',
      back: 'Back to Dashboard',
      chat: 'Chat',
      videoCall: 'Video Call',
      audioCall: 'Audio Call',
      verified: 'Verified by Blockchain',
    },
    hi: {
      mentorship: 'मेरे मेंटर्स',
      findMentors: 'मेंटर्स खोजें',
      loading: 'लोड हो रहा है...',
      noMentors: 'कोई मेंटर्स नहीं मिले',
      back: 'डैशबोर्ड पर वापस जाएं',
      chat: 'चैट',
      videoCall: 'वीडियो कॉल',
      audioCall: 'ऑडियो कॉल',
      verified: 'ब्लॉकचेन द्वारा प्रमाणित',
    },
    bn: {
      mentorship: 'আমার মেন্টররা',
      findMentors: 'মেন্টর খুঁজুন',
      loading: 'লোড হচ্ছে...',
      noMentors: 'কোন মেন্টর পাওয়া যায়নি',
      back: 'ড্যাশবোর্ডে ফিরে যান',
      chat: 'চ্যাট',
      videoCall: 'ভিডিও কল',
      audioCall: 'অডিও কল',
      verified: 'ব্লকচেইন দ্বারা যাচাই করা হয়েছে',
    },
    mrw: {
      mentorship: 'माझे मेंटॉर',
      findMentors: 'मेंटर्स शोधा',
      loading: 'लोड हो रहा है...',
      noMentors: 'कोणतेही मेंटॉर सापडले नाहीत',
      back: 'डॅशबोर्डवर परत जा',
      chat: 'चॅट',
      videoCall: 'वीडियो कॉल',
      audioCall: 'ऑडिओ कॉल',
      verified: 'ब्लॉकचेनद्वारे सत्यापित',
    },
  };

  const t = translations[language];

  useEffect(() => {
    const fetchMentors = async () => {
      setTimeout(() => {
        setMentors(dummyData);
        setLoading(false);
      }, 2000);
    };

    fetchMentors();
  }, []);

  useEffect(() => {
    // Save language to local storage whenever it changes
    localStorage.setItem('language', language);
  }, [language]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleChat = (name) => {
    navigate(`/dashboard/chat/${name}`);
  };
  
  

  const handleVideoCall = (name) => {
    // Implement video call logic here
    console.log(`Initiating video call with ${name}`);
  };

  const handleAudioCall = (name) => {
    // Implement audio call logic here
    console.log(`Initiating audio call with ${name}`);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredMentors = mentors.filter((mentor) => {
    return (
      (filters.name === '' || mentor.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.role === '' || mentor.role.toLowerCase().includes(filters.role.toLowerCase())) &&
      (filters.company === '' || mentor.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (filters.expertise === '' || mentor.expertise.toLowerCase().includes(filters.expertise.toLowerCase())) &&
      (filters.college === '' || mentor.college.toLowerCase().includes(filters.college.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#232F47] to-[#1c2535] text-white flex">
      <Aside currentPage="/dashboard/mentorship" />

      <div className="flex-1 p-8 ml-64 w-[81.5vw] text-black">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#f9a825]">{t.mentorship}</h1>
          <button
            className="p-2 rounded text-white bg-[#f9a825] hover:bg-[#f9a825]/90 transition-colors"
            onClick={handleBack}
          >
            {t.back}
          </button>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Filter by Name"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
            placeholder="Filter by Role"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="company"
            value={filters.company}
            onChange={handleFilterChange}
            placeholder="Filter by Company"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="expertise"
            value={filters.expertise}
            onChange={handleFilterChange}
            placeholder="Filter by Expertise"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="college"
            value={filters.college}
            onChange={handleFilterChange}
            placeholder="Filter by College"
            className="p-2 rounded border border-gray-300"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[70vh]">
            <div className="loader border-t-4 border-[#f9a825] border-solid w-16 h-16 border-4 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <button
              className="bg-[#f9a825] text-black py-2 px-6 rounded hover:bg-[#f9a825]/90 transition-colors mb-6"
              onClick={() => console.log('Find Mentors clicked')}
            >
              {t.findMentors}
            </button>

            {filteredMentors.length === 0 ? (
              <p className="text-center text-lg text-gray-600">{t.noMentors}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMentors.map((mentor) => (
                  <div key={mentor.name} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <img
                      src={mentor.profileImage}
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2 flex items-center">
                      {mentor.name}
                      {mentor.verified && (
                        <span
                          className="ml-2 text-green-500 text-sm"
                          title={t.verified}
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=59733&format=png&color=40C057"
                            alt=""
                            className='w-6 h-6'
                          />
                        </span>
                      )}
                    </h2>
                    <p className="text-gray-700">{mentor.role}</p>
                    <p className="text-gray-700">{mentor.company}</p>
                    <p className="text-gray-700">{mentor.expertise}</p>
                    <p className="text-gray-700">{mentor.college}</p>
                    <div className="flex justify-between mt-4">
                      <button
                        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors"
                        onClick={() => handleChat(mentor.name)}
                      >
                        {t.chat}
                      </button>
                      <button
                        className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition-colors"
                        onClick={() => handleVideoCall(mentor.name)}
                      >
                        {t.videoCall}
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors"
                        onClick={() => handleAudioCall(mentor.name)}
                      >
                        {t.audioCall}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Mentorship;

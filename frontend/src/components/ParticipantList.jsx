import React, { useEffect, useState } from "react";
import axios from "axios";

const ParticipantList = ({ meetingId }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(`/meetings/${meetingId}/participants`);
        setParticipants(response.data);
      } catch (err) {
        console.error("Error fetching participants:", err);
      }
    };
    fetchParticipants();
  }, [meetingId]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg w-1/4">
      <h2 className="text-xl text-white mb-4">Participants</h2>
      <ul className="space-y-4">
        {participants.map((participant) => (
          <li key={participant.id} className="text-white">
            <div className="flex items-center space-x-2">
              <img
                src={participant.profilePicture || "default-avatar.png"}
                alt={participant.name}
                className="w-8 h-8 rounded-full"
              />
              <span>{participant.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;

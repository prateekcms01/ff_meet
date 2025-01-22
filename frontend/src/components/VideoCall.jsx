import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ParticipantList from "./ParticipantList";
import Chat from "./Chat";
import BackgroundEffect from "./BackgroundEffect";
import MeetingControls from "./MeetingControls";

const VideoCall = () => {
  const { meetingId } = useParams();
  const [userId] = useState(1); // Dummy userId for now, can be dynamically assigned
  const [participants, setParticipants] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Placeholder for getting participants, chat messages, etc.
    // Example: Fetch participant data from backend
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(`/meetings/${meetingId}/participants`);
        setParticipants(response.data);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };
    fetchParticipants();
  }, [meetingId]);

  return (
    <div className="relative bg-black h-screen flex">
      <BackgroundEffect />
      <div className="flex flex-1 p-4 space-x-4">
        <div className="flex-1">
          <h1 className="text-2xl text-white mb-4">Video Call</h1>
          {/* Placeholder video grid */}
          <div className="grid grid-cols-2 gap-4">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className="bg-gray-700 p-4 rounded-lg text-white"
              >
                <p>{participant.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Chat meetingId={meetingId} userId={userId} />
          <MeetingControls meetingId={meetingId} userId={userId} />
        </div>
      </div>

      <ParticipantList meetingId={meetingId} />
    </div>
  );
};

export default VideoCall;

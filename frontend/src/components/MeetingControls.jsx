import React, { useState } from "react";
import axios from "axios";

const MeetingControls = ({ meetingId, userId }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const toggleMute = async () => {
    setIsMuted(!isMuted);
    await axios.post("/meeting-controls/toggle-mute", {
      meetingId,
      userId,
      isMuted: !isMuted,
    });
  };

  const toggleVideo = async () => {
    setIsVideoOn(!isVideoOn);
    await axios.post("/meeting-controls/toggle-video", {
      meetingId,
      userId,
      isVideoOn: !isVideoOn,
    });
  };

  const endCall = async () => {
    await axios.post("/meeting-controls/end-call", { meetingId });
    // Additional logic for ending the call
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg space-y-4">
      <button
        onClick={toggleMute}
        className={`w-full py-2 ${
          isMuted ? "bg-red-500" : "bg-green-500"
        } text-white rounded-md`}
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <button
        onClick={toggleVideo}
        className={`w-full py-2 ${
          isVideoOn ? "bg-blue-500" : "bg-gray-500"
        } text-white rounded-md`}
      >
        {isVideoOn ? "Turn Off Video" : "Turn On Video"}
      </button>
      <button
        onClick={endCall}
        className="w-full py-2 bg-red-600 text-white rounded-md"
      >
        End Call
      </button>
    </div>
  );
};

export default MeetingControls;

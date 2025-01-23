DROP DATABASE IF EXISTS ff;

CREATE DATABASE ff;

USE ff;

-- Meetings table
CREATE TABLE meetings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT 1
);

-- Participants table
CREATE TABLE participants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meeting_id INT,
    is_muted BOOLEAN DEFAULT 0,
    is_video_on BOOLEAN DEFAULT 1,
    FOREIGN KEY (meeting_id) REFERENCES meetings(id),
    UNIQUE (meeting_id, user_id) -- Ensure a participant is unique in a meeting
);

-- Reactions table
CREATE TABLE reactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meeting_id INT,
    user_id INT,
    reaction VARCHAR(255),
    FOREIGN KEY (meeting_id, user_id) REFERENCES participants(meeting_id, user_id) -- Reference unique participant
);

-- Hand Raises table
CREATE TABLE hand_raises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meeting_id INT,
    user_id INT,
    FOREIGN KEY (meeting_id, user_id) REFERENCES participants(meeting_id, user_id) -- Reference unique participant
);

-- Captions table
CREATE TABLE captions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meeting_id INT,
    user_id INT,
    caption TEXT,
    FOREIGN KEY (meeting_id, user_id) REFERENCES participants(meeting_id, user_id) -- Reference unique participant
);

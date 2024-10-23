import React from 'react';

const MatchCard = ({ match }) => {
  const DEFAULT_NAME = "N/A";
  const DEFAULT_SCORE = "N/A";
  const UNKNOWN_STATUS = "Unknown";

  const homeTeamName = match?.homeTeam?.name || DEFAULT_NAME;
  const awayTeamName = match?.awayTeam?.name || DEFAULT_NAME;

  const matchDate = match.utcDate ? new Date(match.utcDate).toLocaleDateString() : DEFAULT_NAME;
  const matchTime = match.utcDate ? new Date(match.utcDate).toLocaleTimeString() : DEFAULT_NAME;

  const matchStatus = match?.status || UNKNOWN_STATUS;
  const homeScore = match?.score?.fullTime?.homeTeam !== undefined ? match.score.fullTime.homeTeam : DEFAULT_SCORE;
  const awayScore = match?.score?.fullTime?.awayTeam !== undefined ? match.score.fullTime.awayTeam : DEFAULT_SCORE;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{homeTeamName} vs {awayTeamName}</h2>
      <p><strong>Date:</strong> {matchDate}</p>
      <p><strong>Time:</strong> {matchTime}</p>
      <p><strong>Status:</strong> {matchStatus}</p>
      <p><strong>Score:</strong> {homeScore} - {awayScore}</p>
    </div>
  );
};

export default MatchCard;

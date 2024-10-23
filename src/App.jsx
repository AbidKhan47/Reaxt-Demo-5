import React, { useState, useEffect } from "react";
import MatchCard from "./Matchcard"; 

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true); 
      setError(null); 

      try {
        console.log("API Key:", process.env.REACT_APP_FOOTBALL_API_KEY); 
        const response = await fetch('https://api.football-data.org/v4/matches', {
          headers: {
            'X-Auth-Token': process.env.REACT_APP_FOOTBALL_API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data); 
        setMatches(data.matches || []); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchMatches(); 
  }, []); 

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Football Match Dashboard</h1>
        {loading && <p className="text-center">Loading matches...</p>}
        {error && <p className="text-center text-red-500">{error}</p>} {}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.length > 0 ? (
              matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))
            ) : (
              <p className="text-center">No matches available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

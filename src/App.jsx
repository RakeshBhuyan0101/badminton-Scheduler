import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TeamTable from './component/TeamTable';

function App() {
  const [teamCount, setTeamCount] = useState(0);
  const [teams, setTeams] = useState([]); // Store teams in state

  function createTeam() {
    const newTeams = [];
    for (let i = 0; i < teamCount; i++) {
      newTeams.push({
        teamName: `player${i + 1}`,
        win: 0,
        los: 0,
        PCT: 0,
        PF: 0,
        PA: 0,
        PD: 0,
      });
    }
    setTeams(newTeams); // Update teams state
    localStorage.setItem("teams", JSON.stringify(newTeams));
  }

  return (
    <>
      <h3>Enter number of teams</h3>
      <input
        type="number"
        value={teamCount}
        onChange={(e) => setTeamCount(e.target.value)}
      />
      <button type="submit" onClick={createTeam}>Submit</button>

      {/* Pass the updated teams as a prop to TeamTable */}
      <TeamTable teams={teams} />
    </>
  );
}

export default App;